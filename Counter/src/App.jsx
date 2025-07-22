import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  let [count, setcount] = useState(15)

  const addvalue = () => {
    count = count + 1
    setcount(count)
    console.log("Clicked",count)
  }

  const decrementValue = () => {
    count = count - 1
    setcount(count)
    console.log("Clicked",count)
  }

  return (
    <div>
      <h1 className='text-6xl font-bold font-stretch-ultra-expanded p-20 text-center'>Counter :{count}</h1>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={addvalue}>
        Increment
      </button>
      <br />
      <br />
      <button className="Decrement" onClick={decrementValue}>
        Decrement
      </button>
    </div>
  )
}

export default App
