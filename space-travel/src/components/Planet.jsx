import styles from "../Styles/Planet.module.css"

export default function Planet({name, pop, pic}) {
  return (
    <div className={styles.planetInfo}>
        <img src={pic}></img>
        <p>{name}</p> 
        <p>{pop}</p>
    </div>
  )
}
