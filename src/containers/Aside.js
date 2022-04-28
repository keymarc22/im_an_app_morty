import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import WrapperComponent from '../hooks/useOutsideClickHandler';
import { useGetMultipleItems } from '../hooks/useGetMultipleItems';
import { FaTimes  } from "react-icons/fa";
import '../styles/Aside.scss';

function Aside({ item, setDetails }) {
  const response = useGetMultipleItems(item.episode)

  useEffect(() => {
    document.getElementById("aside").classList.add("d-block");
    return () => {
      document.getElementById("aside").classList.remove("d-block");
    };
  }, []);

  return ReactDom.createPortal(
    <div className='background'>
      <WrapperComponent handleClick={() => setDetails(false)}>
        <div className="aside-active">
          <div className="close" onClick={() => setDetails(false)}>
            <FaTimes />
          </div>
          <section>
            <figure>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <hr />
            </figure>
          </section>
          <div className="details">
            <h3>Status: 
              <span>{item.status}</span>
            </h3>
            <h3>Species: 
              <span>{item.species}</span>
            </h3>
            <h3>Type: 
              <span>{item.type}</span>
            </h3>
            <h3>Gender: 
              <span>{item.gender}</span>
            </h3>
            <h3>Origin: 
              <span>{item.origin.name}</span>
            </h3>
            <h3>Location: 
              <span>{item.location.name}</span>
            </h3>
            {response.loaded && (
              <div>
                <h3>Episodes:</h3>
                <ul>
                  {response.items.map((item) => (
                    <li>
                      {" "}
                      {item.episode} | {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </WrapperComponent>
    </div>,
    document.getElementById("aside")
  );
}

export { Aside };