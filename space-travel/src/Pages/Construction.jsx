import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import shipContext from "../context/shipContext"
import SpaceTravelApi from "../services/SpaceTravelApi"

export default function Construction() {
  const {ships, setShips} = useContext(shipContext)
  
  const [spaceship, setSpaceship] = useState({
    name:"",
    cap:"",
    desc:"",
    pic:""
  })

  const [val, setVal] = useState({
    name: false,
    cap: false,
    desc: false,
    pic: false,
  })

  const [invalid, setInvalid] = useState({
    name: false,
    cap: false,
    desc: false,
    pic: false,
  })

  function handleChange(e){
    const {name, value} = e.target;

     if(value === ""){
            setVal(v => ({
                ...v,
                [name]: false
            }))
        }
        else{
            setVal(v => ({
                ...v,
                [name]: true
            }))
            setInvalid(v => ({
                ...v,
                [name]: false
            }))
            
        }

    setSpaceship(ship => ({
      ...ship,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

        if(!Object.values(val).every(Boolean)){
          if(val.name===false) {setInvalid(i => ({...i, name: true}))}
          if(val.cap===false) {setInvalid(i => ({...i, cap: true}))}
          if(val.desc===false) {setInvalid(i => ({...i, desc: true}))}
          if(val.pic===false) {setInvalid(i => ({...i, pic: true}))}
            return
        }
      
        SpaceTravelApi.buildSpacecraft({
          name: spaceship.name,
          capacity: spaceship.cap,
          description: spaceship.desc,
          pictureUrl: spaceship.pic
        })
    // setShips(ship => ([
    //   ...ship,
    //   {
    //     id: spaceship.name,
    //     name: spaceship.name,
    //     capacity: spaceship.cap,
    //     description: spaceship.desc,
    //     pictureUrl: spaceship.pic,
    //     currentLocation: 2
    //   }

    // ]))

    setSpaceship({
      name:"",
      cap:"",
      desc:"",
      pic:""
    })
    
  }

  return (
    <>
        <Link to="./SpaceCraftsPage" />
        <div id='form'>
        <form onSubmit={handleSubmit}>
            <input 
              id = "name"
              type="text"
              placeholder="Name"
              value={spaceship.name}
              onChange={handleChange}
              name="name"
            />
            <input 
              id = "cap"
              type="text"
              placeholder="Capacity"
              value={spaceship.cap}
              onChange={handleChange}
              name="cap"
            />
            <textarea 
              id = "desc"
              placeholder="Description"
              value={spaceship.desc}
              onChange={handleChange}
              name="desc"
            />
            <input 
              id = "pic"
              type="text"
              placeholder="Picture URL"
              value={spaceship.pic}
              onChange={handleChange}
              name="pic"
            />
            <button type="submit">Build</button>
        </form>
        {invalid.name === true ? <p className="req">Name is required</p> : ""}
        {invalid.cap === true ? <p className="req">Capacity is required</p> : ""}
        {invalid.desc === true ? <p className="req">Description is required</p> : ""}
        {invalid.pic === true ? <p className="req">Picture URL is required</p> : ""}
        </div>
    </>
  )
}
