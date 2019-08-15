import React from 'react';

import './Card.css'

const Card = ({ person }) => {
  const { avatar, name, details: { city, company, position} } = person
  return (
    <div className='card'>
      <img src={avatar} alt='avatar' className='avatar'/>
      <h1 className="card-header">{name}</h1>
      <p className="person-about">{`City: ${city}`}</p>
      <p className="person-about">{`City: ${company}`}</p>
      <p className="person-about">{`City: ${position}`}</p>
    </div>
  )
}

export default Card