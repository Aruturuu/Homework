import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Trigonometry from "./pages/trigonometry.jsx";
import Monotonicity from "./pages/monotonicity.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="monotonicity" />} />
        <Route path="monotonicity" element={<Monotonicity />} />
        <Route path="trigonometry" element={<Trigonometry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
