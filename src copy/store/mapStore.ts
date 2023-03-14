import { create } from "zustand";
import { ILocation, IMap } from "types/types";

export const useMapStore = create<IMap>((set, get) => ({
  location: { lat: 21, lng: 23 },
  updateLocation: (newLocation: ILocation) =>
    set((state) => ({ ...state, location: newLocation })),
}));
