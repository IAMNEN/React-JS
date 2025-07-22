import { use, useState } from 'react'

import './App.css'

function App() {
const [colour, setColour] = useState("Grey")
  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: colour }}>
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-full font-color-black rounded-3xl'>
            <button onClick={() => setColour("Red")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{ backgroundColor: "Red" }}>Red</button>
            <button onClick={() => setColour("Green")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{ backgroundColor: "Green" }}>Green</button>
            <button onClick={() => setColour("Black")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{ backgroundColor: "Black" }}>Black</button>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default App
