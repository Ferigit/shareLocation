import React, { useEffect } from "react";
import { Marker, useMapEvents, useMap, Popup } from "react-leaflet";
import icon from "./constants";
import { Card } from "components/index";
import { IMap } from "types/types";

const AddMarker = ({ location, updateLocation }: IMap) => {
  const map = useMap();

  useEffect(() => {
    map.locate({ setView: true }).on("locationfound", function (e) {
      updateLocation(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, []);

  useMapEvents({
    click: (e) => {
      updateLocation(e.latlng);
    },
  });
  return (
    <Marker icon={icon} position={location}>
      <Popup>
        <Card title="Location details">
          <p>details....</p>
          <p>location lat: {location?.lat}</p>
          <p>location lng: {location?.lng}</p>
        </Card>
      </Popup>
    </Marker>
  );
};

export default AddMarker;
