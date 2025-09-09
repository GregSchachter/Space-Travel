import { useContext, useState } from "react"
import shipContext from "../context/shipContext"
import SpaceTravelApi from "../services/SpaceTravelApi"
import "../Styles/SpaceCraftsPage.css"

import { Link, useNavigate } from "react-router-dom"

export default function SpaceCraftsPage() {
  const {ships, setShips} = useContext(shipContext)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

   if (ships === null || loading === true){
        return (
            <div id="loading" className="loading"> 
              <p>Loading</p>
              <img src="https://media1.tenor.com/m/khzZ7-YSJW4AAAAC/cargando.gif"/>
            </div>
        )
    }

    async function handleClick(e) {
      setLoading(true)
      let destId = e.target.id
      SpaceTravelApi.destroySpacecraftById({id: destId})
            const ship = await SpaceTravelApi.getSpacecrafts();
            setShips(ship.data)
            setLoading(false)

    }

    function linkClick(e){
      navigate(`/Spacecraft?${e.target.id}`)
    }

  return (
    <>
        <Link to="/Construction" id="buildBtn">Build a Spacecraft</Link>
        {ships.map(ship => (
            <div key={ship.id} className="spaceshipList">
              <img onClick={linkClick} id ={ship.id} src= {ship.pictureUrl} className="shipPicture"/>
              <p>Name: {ship.name} 
                <br></br>Capacity: {ship.capacity}</p>
              <button id={ship.id} onClick={handleClick} className="destroyBtn">Destroy</button>
            </div>))}
    </>
  )
}
