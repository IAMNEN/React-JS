import React from 'react'

const profile = (props) => {
  return (
    <div className='parent'>
    <div className='card'>
        <img src={props.user.image} alt="profile"/>
        <h2>{props.user.name}</h2>
        <p>{props.user.bio}</p>
        <button className='button'>follow</button>
    </div>
    </div>
  )
}

export default profile
