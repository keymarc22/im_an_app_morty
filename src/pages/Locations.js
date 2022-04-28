import React from 'react';
import { useGetItems } from '../hooks/useGetItems';
import { Location } from '../components/Location';
import { SectionHeader } from '../components/SectionHeader';
import { Skeleton } from '../containers/Skeleton';

const Locations = () => {
  const response = useGetItems("https://rickandmortyapi.com/api/location/")

  return (
    <React.Fragment>
      {response.loaded &&
        <div className="locations-list--container">
          <SectionHeader
            loaded={response.loaded}
            items={response.items.results}
            title="Rick and Morty's Locations"
            info={response.items.info.count}
          />
          <ul className='locations-list'>
            {response.items.results.map((location) => (
                <Location location={location}/>
              ))
            }
          </ul>
        </div>
      }

      {!response.loaded &&
        <Skeleton />
      }
    </React.Fragment>
  )
}

export { Locations };