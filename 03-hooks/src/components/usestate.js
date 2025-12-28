import React, { useState } from 'react'

const Usestate = () => {
    const [a, seta] = useState(0);
    function incrementA() {
        seta(a + 1);
    }
    function decrementA() {
        seta(a - 1);
    }
  return (
    <div>
        <h1>Value Of A is {a}</h1>
        <button onClick={incrementA}>Increment A</button>
        <button onClick={decrementA}>Decrement A</button>
    </div>
  )
}

export default Usestate
