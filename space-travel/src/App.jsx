import styles from "./App.module.css";
import React, { useEffect, useState, } from "react";

import SpaceTravelApi from "./services/SpaceTravelApi.js";
import shipContext from "./context/shipContext.js"

import AppRoutes from "./Routes/AppRoutes.jsx";




function App (){
  const [ships, setShips] = useState(null)

  const contextValue = {
    ships,
    setShips
  }

  useEffect(() => {
        try {
          localStorage.clear()
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

  return (
      <shipContext.Provider value={contextValue}>
        <AppRoutes />
      </shipContext.Provider>
  );
}

export default App
