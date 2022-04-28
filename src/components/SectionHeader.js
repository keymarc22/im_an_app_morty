import React from 'react';
import '../styles/SectionHeader.scss';

const SectionHeader = ({items, loaded, info, title}) => {
  return (
    <div className='page-info'>
      <h1 className='title'>{title}</h1>
      <h3 className='title-details'>
        {loaded &&
          items.length + " of " + info + " total"
        }
      </h3>
    </div>
  )
}

export { SectionHeader }