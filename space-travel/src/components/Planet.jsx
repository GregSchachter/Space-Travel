import styles from "../Styles/Planet.module.css"

export default function Planet({name, pop, pic, click}) {
  
  const handleClick = (e) => {
    const div = document.getElementById(`${e.target.id}div`)
    const divClass = e.target.parentElement.className
    
    click(e.target.id, div, divClass)
  }

  return (
    <div className={styles.planetInfo} id={`${name}div`}>
        <img id={name} onClick={handleClick} src={pic}></img>
        <p>{name}</p> 
        <p>{pop}</p>
    </div>
  )
}
