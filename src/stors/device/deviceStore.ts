import { TFlattenDevice, TSelect } from 'types/generalTypes';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type TState = {
  deviceArr: TFlattenDevice[];
  filterByTags: TSelect<string>;
}

type TActions = {
  setDevices: (deviceArr: TFlattenDevice[]) => void;
  setFilterByTagsCurrent: (tag: string) => void;
  setFilterByTagsOptions: (flutteredDevices: TFlattenDevice[]) => void;
}

export type TZDeviceState = TState & TActions;

const useDeviceStore = create<TZDeviceState>()(
  devtools(immer((set) => ({
    deviceArr: [],
    filterByTags: {
      current: 'All',
      options: [],
    },
    setDevices: (newDevices) => set((state) => {
      state.deviceArr = newDevices;
    }),
    setFilterByTagsCurrent: (tag) => set((state) => {
      state.filterByTags.current = tag;
    }),
    setFilterByTagsOptions: (flutteredDevices) => set((state) => {
      const tags = [ ...new Set(flutteredDevices.map((device) => device.tags).flat()) ];

      state.filterByTags.options = [ ...tags, 'All' ];
    }),
  }))),
);

export default useDeviceStore;
