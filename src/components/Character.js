import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Aside } from '../containers/Aside';
import '../styles/Character.scss';

const Character = ({character}) => {
  const [details, setDetails] = useState(false);

  return (
    <React.Fragment>
      <li key={character.id} onClick={() => setDetails(!details)}>
        <figure>
          <img src={character.image} alt={character.name}/>
          <div className='items-details'>
            <h3>{character.name}</h3>
            <h4>{character.gender} | {character.species} </h4>
          </div>
        </figure>
      </li>
      {details &&
        <CSSTransition
          in={details}
          timeout={100}
          classNames="display"
          unmountOnExit
        >
          <Aside item={character} setDetails={setDetails}/>
        </CSSTransition>
      }
    </React.Fragment>
  )
}

export { Character };