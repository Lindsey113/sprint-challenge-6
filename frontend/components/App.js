import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

// const urlPlanets = 'http://localhost:9009/api/planets'
// const urlPeople = 'http://localhost:9009/api/people'

// const requestPeople = fetch('http://localhost:9009/api/people')
// .then(res => res.json());

// const requestPlanets = fetch('http://localhost:9009/api/planets')
// .then(res => res.json());

// Promise.all([requestPeople, requestPlanets])
// .then(([dataPeople, dataPlanets]) => {
//   let people = dataPeople
//   let planets = dataPlanets

//   let { data } = people
//     people.forEach(person => {
//       console.log(person)
//     })
// })


function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

const [person, setPerson] = useState([]);
const [planet, setPlanet] = useState([]);

useEffect(() => {
  function getData() {
  axios.get('http://localhost:9009/api/planets')
       .then(res => {
        // console.log(res)
        setPlanet(res.data)
      })
       .catch(err => console.log(err));
  axios.get('http://localhost:9009/api/people')
       .then(res => {
       // console.log(res)
        setPerson(res.data)
      })
       .catch(err => console.log(err));
    }


    
    getData()
}, []);


const combinedData = person.map(pers => {
  const matchingPlanet = planet.find(p => p.id === pers.homeworld)

  return {...pers, homeworld: matchingPlanet}
})

//setPerson(combinedData)

console.log(person)


  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
      combinedData.map(char =>   
     <Character key={char.id} 
     person={char}
    // planet={homeworld}
     />
    )
      }
    </div>
  )
  
}


export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
