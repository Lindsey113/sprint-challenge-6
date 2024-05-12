import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'



function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state


const [data, setData] = useState([])


  useEffect(() => {
    async function getData(){
      const [resPlanets, resPeople] = await Promise.all([axios.get(urlPlanets), axios.get(urlPeople)])
      let planets = resPlanets.data
      let people = resPeople.data
      let newPeeps = people.map(person => {
        const matchingPlanet = planets.find(p => p.id === person.homeworld)
               
        return {...person, homeworld: matchingPlanet}
      })
      setData(newPeeps)
    }
    getData()
  }, [])




  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
          data.length > 0 ? (
           data.map(char => <Character key={char.id} person={char} planet={char.homeworld} />)
        ) : (<p>Loading...</p>)

      }
    </div>
  )
  
}


export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
