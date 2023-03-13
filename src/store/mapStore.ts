import { create } from "zustand";

interface ILocation {
  lat: number;
  lang: number;
}

interface IMap {
  location: ILocation;
  updateLocation: (newLocation: ILocation) => void;
}

export const useMapStore = create<IMap>((set, get) => ({
  location: { lat: 21, lang: 23 },
  updateLocation: (newLocation: ILocation) =>
    set((state) => ({ ...state, location: newLocation })),
}));
