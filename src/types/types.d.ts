export interface IInitialState {
  locationName: string;
  locationType: string;
  locationLogo: any;
}

export interface ILocation {
  lat: number;
  lng: number;
}

export interface IMap {
  location: ILocation;
  updateLocation: (newLocation: ILocation) => void;
}
