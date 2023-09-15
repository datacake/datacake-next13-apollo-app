import { ImageProps as NextImageProps } from 'next/image';

export type SrcType = NextImageProps['src'] | string;

export enum DeviceMeasurementFields {
  INTERNAL_TEMPERATURE = 'INTERNAL_TEMPERATURE',
  BATTERY = 'BATTERY',
  DOOR_OPEN = 'DOOR_OPEN',
  WARNING = 'WARNING'
}

export type CurrentMeasurementField = {
  fieldName: DeviceMeasurementFields;
  verboseFieldName: string;
}

export type CurrentMeasurement = {
  value: number;
  field: CurrentMeasurementField;
}

export type TDevice = {
  id: string;
  verboseName: string;
  serialNumber: string;
  tags: string[];
  location: string;
  lastHeard: string;
  currentMeasurements?: CurrentMeasurement[];
  online: boolean;
}

export type TFlattenDevice = {
  id: string;
  verboseName: string;
  serialNumber: string;
  tags: string[];
  location: string;
  lastHeard: string;
  INTERNAL_TEMPERATURE: number;
  BATTERY: number;
  WARNING: number;
  DOOR_OPEN: number;
  online: boolean;
}
