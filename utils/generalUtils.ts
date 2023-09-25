/* eslint-disable @typescript-eslint/no-unused-vars */
import { TGetDevice } from '@/app/home/device/[deviceId]/page';
import { TGetAllDevices } from '@/app/home/page';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  DeviceMeasurementFields,
  DeviceRoleFields,
  TFlattenDevice,
  TFlattenDeviceWithImage,
  TTemperatureDataPoint,
} from 'types/generalTypes';

export function calculateAverageTemperatureChange(temperatures: number[]): number {
  const sumOfChanges = temperatures.reduce((sum, temperature, index) => {
    if (index > 0) {
      const temperatureChange = temperature - temperatures[index - 1];
      sum += temperatureChange;
    }
    return sum;
  }, 0);

  // Calculate the average temperature change
  const averageChange = sumOfChanges / (temperatures.length - 1);

  return +averageChange.toFixed(2);
}

/* eslint-disable max-len */
export const flattenDevices = (data: TGetAllDevices): TFlattenDevice[] => data.allDevices.map((device) => {
  const measurementsDict: Record<DeviceMeasurementFields, number> & { temperatureChartData: number[] } = {
    BATTERY: 0,
    DOOR_OPEN: 0,
    INTERNAL_TEMPERATURE: 0,
    WARNING: 0,
    temperatureChartData: [],
  };

  device.currentMeasurements?.forEach((measurement) => {
    measurementsDict[measurement.field.fieldName] = measurement.value;
  });

  device.roleFields?.forEach((roleField) => {
    if (roleField.field.fieldName === DeviceRoleFields.INTERNAL_TEMPERATURE) {
      measurementsDict.temperatureChartData = roleField.chartData;
    }
  });

  // Removing the currentMeasurements property from the device
  const { currentMeasurements, roleFields, ...deviceWithoutMeasurementsAndRoleFields } = device;
  // measurementsDict.temperatureChartData[1] - because we have a null value for the first element in array;
  const trend = calculateAverageTemperatureChange(measurementsDict.temperatureChartData);

  const result: TFlattenDevice = { ...deviceWithoutMeasurementsAndRoleFields, trend, ...measurementsDict };
  // Merging the original device object with the measurementsDict
  return result;
});

export const flattenDevice = ({ device }: TGetDevice): TFlattenDeviceWithImage => {
  const measurementsDict: Record<DeviceMeasurementFields, number> & { temperatureChartData: number[] } = {
    BATTERY: 0,
    DOOR_OPEN: 0,
    INTERNAL_TEMPERATURE: 0,
    WARNING: 0,
    temperatureChartData: [],
  };

  device.currentMeasurements?.forEach((measurement) => {
    measurementsDict[measurement.field.fieldName] = measurement.value;
  });

  device.roleFields?.forEach((roleField) => {
    if (roleField.field.fieldName === DeviceRoleFields.INTERNAL_TEMPERATURE) {
      measurementsDict.temperatureChartData = roleField.chartData;
    }
  });

  // Removing the currentMeasurements property from the device
  const { currentMeasurements, roleFields, ...deviceWithoutMeasurementsAndRoleFields } = device;
  // measurementsDict.temperatureChartData[1] - because we have a null value for the first element in array;
  const trend = calculateAverageTemperatureChange(measurementsDict.temperatureChartData);

  const result: TFlattenDeviceWithImage = { ...deviceWithoutMeasurementsAndRoleFields, trend, ...measurementsDict };
  // Merging the original device object with the measurementsDict
  return result;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDevicesMetrics({ deviceArray }: {deviceArray: TFlattenDevice[]}) {
  return deviceArray.reduce((acc, device) => {
    if (device.online) {
      acc.numOfDevicesOnline.value += 1;
    } else {
      acc.numOfDevicesOffline.value += 1;
    }

    if (device.BATTERY < 30) {
      acc.numOfDevicesWithLowBattery.value += 1;
    }

    if (device.BATTERY > 70) {
      acc.numOfDevicesAboveThreshold.value += 1;
    }

    if (device.BATTERY > 90) {
      acc.numOfDevicesWithingRange.value += 1;
    }

    return acc;
  }, {
    numOfDevicesOnline: {
      title: 'Number Of Devices Online',
      value: 0,
    },
    numOfDevicesOffline: {
      title: 'Number Of Devices Offline',
      value: 0,
    },
    numOfDevicesAboveThreshold: {
      title: 'Number Of Devices Above Threshold',
      value: 0,
    },
    numOfDevicesWithingRange: {
      title: 'Number Of Devices Withing Range',
      value: 0,
    },
    numOfDevicesWithLowBattery: {
      title: 'Number Of Devices With Low Battery',
      value: 0,
    },
  });
}

export function calculateAveragesDevicesKpis({ deviceArray }: { deviceArray: TFlattenDevice[] }) {
  // Initialize variables to store the sum and count for battery and temperature
  let totalBattery = 0;
  let totalTemperature = 0;
  let batteryCount = 0;
  let temperatureCount = 0;

  // Iterate through the array of devices
  deviceArray.forEach((device) => {
    // Check if the device has a valid BATTERY value
    if (typeof device.BATTERY === 'number') {
      totalBattery += device.BATTERY;
      batteryCount++;
    }

    // Check if the device has a valid INTERNAL_TEMPERATURE value
    if (typeof device.INTERNAL_TEMPERATURE === 'number') {
      totalTemperature += device.INTERNAL_TEMPERATURE;
      temperatureCount++;
    }
  });

  // Calculate the averages
  const averageBattery = batteryCount > 0 ? (totalBattery / batteryCount).toFixed(2) : 0;
  const averageTemperature = temperatureCount > 0 ? (totalTemperature / temperatureCount).toFixed(2) : 0;

  const result = {
    averageTemperature: {
      title: 'Average Temperature',
      value: averageTemperature,
    },
    averageBatteryChargeLevel: {
      title: 'Average Battery Charge Level',
      value: averageBattery,
    },
  };

  return result;
}

export function generateTemperatureTimeSeries(chartData: number[]): TTemperatureDataPoint[] {
  const now = new Date();
  const initialHour = now.getHours();

  const temperatureTimeSeries = chartData.reduce((acc, value, index) => {
    const hour = initialHour - index;
    // eslint-disable-next-line no-nested-ternary
    const time = hour < 0 ? `${Math.abs(hour)}` : hour < 10 ? `0${hour}` : `${hour}`;

    acc.push({ time, value: value === null ? 0 : +value.toFixed(2) });

    return acc;
  }, [] as TTemperatureDataPoint[]);

  // Reverse the time series to have the latest data first
  return temperatureTimeSeries.reverse();
}

export function formatDate(inputDate: Date | string) {
  const date = new Date(inputDate);

  // Extract date components
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so add 1
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
