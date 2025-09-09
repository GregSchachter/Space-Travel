import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SpaceCraftsPage from "../Pages/SpaceCraftsPage";
import PlanetsPage from "../Pages/PlanetsPage";
import Construction from "../Pages/Construction";
import SpaceCraftPage from "../Pages/SpaceCraftPage";
import "../Styles/Routes.css"

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Spacecrafts">Spacecrafts</Link>
            <Link to="/Planets">Planets</Link>
        </nav>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Spacecrafts" element={<SpaceCraftsPage />} />
            <Route path="/Construction" element={<Construction />} />   
            <Route path="/Spacecraft" element={<SpaceCraftPage />} />   
            <Route path="/Planets" element={<PlanetsPage />} />
        </Routes>
    </BrowserRouter>
  )
}
