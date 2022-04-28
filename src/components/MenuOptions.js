import React from 'react';

const MenuOptions = ({options, className}) => {
  return (
    <ul className={className}>
      <li key='characters'>
        <a href='/' >Characters</a>
      </li>
      {options.map((option) => (
        <li key={option}>
          <a href={`/${option.toLowerCase()}`}>{option}</a>
        </li>
      ))}
    </ul>
   );
}

export default MenuOptions;