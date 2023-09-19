import { createSelector } from 'reselect';
import type { TZDeviceState } from 'src/stors/device/deviceStore';

export const selectDeviceArray = (state: TZDeviceState) => state.deviceArr;
export const selectFilterByTagsCurrent = (state: TZDeviceState) => state.filterByTags.current;
export const selectFilterByTagsOptions = (state: TZDeviceState) => state.filterByTags.options;
export const selectSetDevices = (state: TZDeviceState) => state.setDevices;
export const selectSetFilterByTagsCurrent = (state: TZDeviceState) => state.setFilterByTagsCurrent;
export const selectSetFilterByTagsOptions = (state: TZDeviceState) => state.setFilterByTagsOptions;

export const selectFilteredDeviceArr = createSelector(
  [ selectDeviceArray, selectFilterByTagsCurrent ],
  (deviceArray, currentFilter) => {
    if (currentFilter === 'All') return deviceArray;
    return deviceArray.filter((device) => device.tags.includes(currentFilter));
  },
);
