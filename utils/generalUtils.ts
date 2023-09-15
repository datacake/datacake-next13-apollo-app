/* eslint-disable @typescript-eslint/no-unused-vars */
import { TGetAllDevices } from '@/app/page';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DeviceMeasurementFields, TFlattenDevice } from 'types/generalTypes';

/* eslint-disable max-len */
// eslint-disable-next-line import/prefer-default-export
export const flattenDevices = (data: TGetAllDevices): TFlattenDevice[] => data.allDevices.map((device) => {
  const measurementsDict: Record<DeviceMeasurementFields, number> = {
    BATTERY: 0,
    DOOR_OPEN: 0,
    INTERNAL_TEMPERATURE: 0,
    WARNING: 0,
  };

  device.currentMeasurements?.forEach((measurement) => {
    measurementsDict[measurement.field.fieldName] = measurement.value;
  });

  // Removing the currentMeasurements property from the device
  const { currentMeasurements, ...deviceWithoutMeasurements } = device;

  // Merging the original device object with the measurementsDict
  return { ...deviceWithoutMeasurements, ...measurementsDict };
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
