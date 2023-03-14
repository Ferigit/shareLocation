import { memo, useMemo, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import AddMarker from "./AddMarker";
import { useMapStore } from "store/mapStore";
import { Modal } from "components/index";
import "./styles.scss";

const Map = () => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useMapStore((state) => state.location);
  const updateLocation = useMapStore((state) => state.updateLocation);

  const MapComponent = useMemo(
    () => (
      <MapContainer id="mapId" center={location} zoom={30} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddMarker location={location} updateLocation={updateLocation} />
      </MapContainer>
    ),
    [location]
  );

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="mapContainer">{MapComponent}</div>
    </Modal>
  );
};

export default memo(Map);
