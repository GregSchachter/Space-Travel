import styles from "./App.module.css";
import React, { useEffect, useState, } from "react";

import SpaceTravelApi from "./services/SpaceTravelApi.js";
import shipContext from "./context/shipContext.js"

import HomePage from "./Pages/HomePage.jsx";
import PlanetsPage from "./Pages/PlanetsPage.jsx";
import SpaceCraftsPage from "./Pages/SpaceCraftsPage.jsx"
import { BrowserRouter } from "react-router-dom";
import Construction from "./Pages/Construction.jsx";




function App (){
  const [ships, setShips] = useState(null)

  const contextValue = {
    ships,
    setShips
  }

  useEffect(() => {
        try {
        async function shipReq() {
            const ship = await SpaceTravelApi.getSpacecrafts();
            setShips(ship.data)
        }
        shipReq()}

        catch(error) {
            throw new Error('Error connecting to API')
        }

    },[]
)
console.log(ships)
  return (
    <BrowserRouter>
      <shipContext.Provider value={contextValue}>
        <SpaceCraftsPage />
      </shipContext.Provider>
    </BrowserRouter>
  );
}

export default App
