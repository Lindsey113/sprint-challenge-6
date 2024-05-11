import React, { useState, useEffect } from 'react'


function Character( { char, homeworld }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
   const [ isHomeworldRendering, setHomeworldRender ] = useState(true)

  //  useEffect(() => {
  //   setHomeworldRender(true);

  //   getData().then(data => {setHomeworldRender(false)})
  //                .catch(err => {console.log(err)})
  //  }, []);


  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card'> 
      {/* Use the same markup with the same attributes as in the mock */ }
      <h3 className='character-name'>{char}</h3>
      <p> Planet: 
        <span className='character-planet'>{isHomeworldRendering ? (
          <p>Rendering...</p>) : ( {homeworld} ) } 
        </span>
      </p>
    </div>
  )
}

export default Character 
