import { Suspense } from "react";
import { AppRoutes } from "routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// Styles
import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";
import "assets/styles/styles.scss";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        bodyClassName={() => "text-notif"}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
