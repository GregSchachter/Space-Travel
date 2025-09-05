import { useState, useEffect } from "react"
import SpaceTravelApi  from "../services/SpaceTravelApi"
import Planet from "../components/Planet"
import styles from "../Styles/PlanetsPage.module.css"


export default function PlanetsPage() {
  const [planets, setPlanets] = useState(null);

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

    if (planets === null){
        return (
            <div id="loading">Loading</div>
        )
    }

    else {
        return (
            <>
                {planets.map(p => {
                    return (
                        <div className={styles.bigPlanetBox}>
                            <Planet key = {p.id} name={p.name} pop={p.currentPopulation} pic={p.pictureUrl}/>
                        </div>
                    )
                })}
            </>
        )
    }
}
