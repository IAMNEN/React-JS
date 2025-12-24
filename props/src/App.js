import React from 'react'
import Profile from './components/profile'
const App = () => {
  return (
    <div>
      <Profile user = {{name: "Nen Patel",
  bio: "Frontend Developer | React Enthusiast | Cricket Player",
  image: "https://images.unsplash.com/photo-1765568562583-4252b2d854b0?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}/>
  <Profile user = {{name: "Snax Patel",
  bio: "Farmeter | Animal Lover | Nature Enthusiast",
  image: "https://images.unsplash.com/photo-1763411711221-40166c5e20cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"}}/>
      
    </div>
  )
}

export default App
