import React, { useState } from 'react';
import { useGetMultipleItems } from '../hooks/useGetMultipleItems';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import moment from 'moment';
import { Aside } from '../containers/Aside';

const Episode = ({episode}) => {
  const payload = useGetMultipleItems(episode.characters)
  const [toggle, setToggle] = useState(false);
  const [details, setDetails] = useState(false);
  const [item, setItem] = useState({});

  const handleItem = (item) => {
    setDetails(true);
    setItem(item);
  }

  return (
    <React.Fragment>
      <li className={"episode character-toggle-" + toggle} key={episode.id}>
        <div className='header'>
          <h2>{episode.name}</h2>
          <hr />
          <h4>{episode.air_date}</h4>
        </div>
        <br />
        {toggle &&
          <div className='content'>
            <h3>Characters: </h3>
            <br />
            <div className='characters'>
              {payload.loaded && payload.items.length > 0 &&
                payload.items.map((character) => (
                  <figure className='character-avatar-container' title={character.name} onClick={() => handleItem(character)}>
                    <img src={character.image} alt={character.name}/>
                  </figure>
                ))
              }
            </div>
            <br />
            <h3>Created: {moment().format("MMM Do YY")}</h3>
            <br />
            <hr />
          </div>
        }
        <div className='footer'>
          <h4>{episode.episode}</h4>
          <div className="icon-container" onClick={() => {
            setToggle(!toggle)
          }}>
            {toggle ? <FaArrowUp /> : <FaArrowDown />}
          </div>
        </div>
      </li>

      {details &&
        <Aside item={item} setDetails={setDetails}/>
      }
    </React.Fragment>
  )
}

export { Episode };