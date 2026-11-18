import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/inicio";

// Sitio de una sola página: las secciones se navegan con anclas (#proposito, #videos...)
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
