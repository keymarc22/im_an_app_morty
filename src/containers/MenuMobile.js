import React from 'react';
import { FaBars } from "react-icons/fa";

const MenuMobile = ({ open, handleClick, options}) => {
  return (
    <React.Fragment>
      <div className="menuIcon-container" onClick={() => handleClick(!open)}>
        <FaBars className="menuIcon" />
      </div>

      {open && (
        <ul className="navbar-options--mobile">
          <li key='characters' onClick={() => handleClick(false)}>
            <a href='/'>Characters</a>
          </li>
          {options.map((option) => (
            <li key={option} onClick={() => handleClick(false)}>
              <a href={`/${option.toLowerCase()}`}>{option}</a>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}

export default MenuMobile;
