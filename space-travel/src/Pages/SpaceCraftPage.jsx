import { useContext } from "react"
import shipContext from "../context/shipContext"
import "../Styles/SpaceCraftPage.css"

export default function SpaceCraftPage() {
    const {ships, setShips} = useContext(shipContext)
    const url = document.URL;
    const quest = url.indexOf('?')
    const shipId = url.slice(quest+1)
   
       if(ships === null) {
        window.location.href = "/"
         }
        
    const currShip = ships.find(ship => ship.id === shipId)
   
  return (
    <div className="shipPage">
        <img src={currShip.pictureUrl} className="shipPagePic"></img>
        <div className="shipInfo">
            <p>Name: {currShip.name}</p> <br />
            <p>Capacity: {currShip.capacity}</p>
        </div>
        <div className="shipDesc">
            <p>Description</p><br />
            <p>{currShip.description}</p>
        </div>
    </div>
  )
}
