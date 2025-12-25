import React from 'react'

const card = (props) => {
  return (
        <div className='card'>
        <div className='top'>
            <img src={props.logo} alt='profile pic' />
            <button>Apply now</button>
        </div>
        <div className='center'>
            <h3>{props.name} <span>{props.time}</span></h3>
            <h2>{props.title}</h2>
            <div className='type'>
                <h4 className='first'>{props.type1}</h4>
                <h4 className='second'>{props.type2}</h4>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <div className='type2'>
                    <h3>{props.rate}</h3>
                    <p>{props.location}</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default card
