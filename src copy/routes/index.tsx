import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export { AppRoutes };
