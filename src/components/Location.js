import React from 'react';
import '../styles/Location.scss';
import space from '../assets/images/space.jpeg';

const Location = ({location}) => {
  return (
    <li key={location.id}>
      <div className='location'>
        <figure>
          <img src={space} alt={location.name}/>
        </figure>
        <div className='location-details'>
          <h3>{location.name}</h3>
          <h4>{location.type} | {location.dimension}</h4>
        </div>
      </div>
    </li>
  )
}

export { Location };

