import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Character( { person, planet }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [ isHomeworldRendering, setHomeworldRender ] = useState(true)
  const [ showPlanet, setShowPlanet ] = useState(false);

   useEffect(() => {
    setHomeworldRender(true);
    axios.get('http://localhost:9009/api/planets')
         .then(data => {setHomeworldRender(false)})
         .catch(err => {console.log(err)})
   }, []);


  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const togglePlanet = () => {
    setShowPlanet(!showPlanet)
  }
  return (
    <div className='character-card' onClick={togglePlanet}> 
      {/* Use the same markup with the same attributes as in the mock */ }
      <h3 className='character-name'>{person.name}</h3>
      {showPlanet && !isHomeworldRendering && (
        <p>
          Planet: <span className='character-planet'>{planet.name}</span>
        </p>
      )}
    </div>
  )
}

export default Character 
