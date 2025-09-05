import { useContext } from "react"
import shipContext from "../context/shipContext"
import SpaceTravelApi from "../services/SpaceTravelApi"

import Construction from "./Construction"

import { Link } from "react-router-dom"

export default function SpaceCraftsPage() {
  const {ships, setShips} = useContext(shipContext)

   if (ships === null){
        return (
            <div id="loading">Loading</div>
        )
    }

    function handleClick(e) {
      let destId = e.target.id
      SpaceTravelApi.destroySpacecraftById({id: destId})
      console.log(e.target.id)
      console.log(ships)
    }

    console.log(ships)
  return (
    <>
        <Link to="./Construction" />
        {ships.map(ship => (
            <div id="spacehipList">
              <Link to="./SpaceCraftPage">
                <img src= {ship.pictureUrl} />
              </Link>
              <p>Name: {ship.name}</p>
              <p>Capacity: {ship.capacity}</p>
              <button id={ship.id} onClick={handleClick}>Destroy</button>
            </div>))}
    </>
  )
}
