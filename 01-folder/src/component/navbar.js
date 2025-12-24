import React from 'react'

const navbar = () => {
  return (
    <nav className='nav'>
      <h2 className='logo'>MyApp</h2>
      <ul className='menu'>
        <li className='item'>Home</li>
        <li className='item'>About</li>
        <li className='item'>Services</li>
        <li className='item'>Contact</li>
      </ul>
    </nav>
  )
}

export default navbar
