import React, {useState} from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/"


export default function CreatePost() {
  const [name, setName] = useState("")
  const [prenom, setPrenom] = useState("")
  const [age, setAge] = useState("")
  const postPerson = (person) => {
    var person = {
      "nom": name,
      "prenom": prenom,
      "age": age
    }
    axios.post("/posts", person)
  }
  const updateName = (event) => {
    setName(event.target.value)
  }
  const updatePrenom = (event) => {
    setPrenom(event.target.value)
  }
  const updateAge = (event) => {
    setAge(event.target.value)
  }


  return (
    <div className='flex flex-col w-56'>
      <label>Nom</label>
      <input className='border' type="text" onChange={updateName} />
      <label>Prenom</label>
      <input className='border' type="text" onChange={updatePrenom}/>
      <label>L'age</label>
      <input className='border' type="number" onChange={updateAge}/>
      <button className='border mt-2' onClick={postPerson}>Submit</button>
    </div>
  );
}
