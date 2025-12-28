import React, { useState } from 'react'

const Gamepoint = () => {

    const [a, seta] = useState(0);
    const [b, setb] = useState(0);

    const incrementA = () => {
        seta(a + 1);
    }
    const decrementA = () => {
        seta(a - 1);
    }
    const incrementB = () => {
        setb(b + 1);
    }
    const decrementB = () => {
        setb(b - 1);
    }

  return (
    <div className='container'>
        <h1>Point Table</h1>
    <div className='first'>
        <h1>TEAM A = {a}</h1>
        <button onClick={incrementA}>Increment</button>
        <button onClick={decrementA}>Decrement</button>
    </div>
    <div className='second'>
        <h1>TEAM B = {b}</h1>
        <button onClick={incrementB}>Increment</button>
        <button onClick={decrementB}>Decrement</button>
    </div>
    </div>
  )
}

export default Gamepoint
