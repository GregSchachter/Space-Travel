import { useState, useEffect, useContext } from "react"
import SpaceTravelApi  from "../services/SpaceTravelApi"
import Planet from "../components/Planet"
import styles from "../Styles/PlanetsPage.module.css"
import shipContext from "../context/shipContext"


export default function PlanetsPage() {
  const [planets, setPlanets] = useState(null);
  const {ships, setShips} = useContext(shipContext)
  const [planetClicked, setPlanetClicked] = useState(null)
  const [loading, setLoading] = useState(false)


    useEffect(() => {
        try {
        async function planetReq() {
            const plan = await SpaceTravelApi.getPlanets();
            setPlanets(plan.data)
        }
        planetReq()}

        catch(error) {
            throw new Error('Error connecting to API')
        }

    },[]
)
    function planetClick(id, div, divClass) {
        setPlanetClicked(id)
        let allDivs = document.getElementsByClassName(divClass)
        const divArr = Array.from(allDivs)
        divArr.map(div => {
            div.style.borderColor = "white"
        })
        div.style.borderColor = "red"
        
    }

   async function shipClick(e) {
        if(planetClicked === null){
            return
        }
        else {
            setLoading(true)
            const newPlanetIdx = planets.find(planet => planet.name === planetClicked).id
            await SpaceTravelApi.sendSpacecraftToPlanet({spacecraftId: e.target.id, targetPlanetId: newPlanetIdx})

            const ship = await SpaceTravelApi.getSpacecrafts();
            setShips(ship.data)
            const planet = await SpaceTravelApi.getPlanets();
            setPlanets(planet.data)
        
            setPlanetClicked(null)
            setLoading(false)
        }
        
    }


    if (planets === null || loading === true){
        return (
            <div id="loading" className={styles.loading}>
                <p>Loading</p>
                <img src="https://media1.tenor.com/m/khzZ7-YSJW4AAAAC/cargando.gif"/>
                </div>
        )
    }

    else {
        return (
            <>
                {planets.map(p => {
                    return (
                        <div key={p.id}className={styles.bigPlanetBox}>
                            <Planet 
                                key = {p.id} 
                                name={p.name} 
                                pop={p.currentPopulation} 
                                pic={p.pictureUrl} 
                                click={planetClick}
                            />
                            {ships.map(ship => (
                                ship.currentLocation === p.id ? <img key={ship.id} id={ship.id} src={ship.pictureUrl} onClick={shipClick} className={styles.shipPlanetPage}/> : ""
                        ))}
                        </div>
                    )
                })}
            </>
        )
    }
}
