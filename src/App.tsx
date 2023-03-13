import "./App.css";
import { useMapStore } from "./store/mapStore";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

// Styles
import "./assets/styles/styles.scss";

function App() {
  const location = useMapStore((state) => state.location);
  const updateLocation = useMapStore((state) => state.updateLocation);

  const handleUpdateLocation = () => {
    const newLocation = { lat: 30, lang: 40 };
    updateLocation(newLocation);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      {/* <h1 className="text-3xl font-bold underline text-red-600">
        Location : {location?.lat}, {location?.lang}
      </h1>
      <button onClick={handleUpdateLocation}>click</button> */}
    </div>
  );
}

export default App;
