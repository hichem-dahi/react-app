import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export default function PostsList() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get("/posts").then((res) => {
      setPersons(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      {persons &&
        persons.map((person) => (
          <div key={person.id} className="border mb-2 p-2">
            <div>{person.nom}</div>
            <div>{person.prenom}</div>
            <div>{person.age}</div>
          </div>
        ))}
    </div>
  );
}
