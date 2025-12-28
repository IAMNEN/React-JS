import React from 'react'

const App = () => {
  function changeHandler(event) {
    console.log(event.target.value)
    console.log(event)
    console.log(event.target)
    console.log('Clicked')
  }
  return (
    <div>
      <h1>Hello Nen</h1>
      <input placeholder="Type here..." onClick={changeHandler} />
    </div>
  )
}

export default App
