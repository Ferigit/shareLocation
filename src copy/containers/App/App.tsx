import { Suspense } from "react";
import { AppRoutes } from "../../routes";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";

// Styles
import "../../assets/styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
