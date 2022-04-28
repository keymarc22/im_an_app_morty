import React from 'react';
import { useGetItems } from '../hooks/useGetItems';
import { Episode } from '../components/Episode';
import { SectionHeader } from '../components/SectionHeader';
import { Skeleton } from '../containers/Skeleton';
import '../styles/Episode.scss';

const Episodes = () => {
  const response = useGetItems("https://rickandmortyapi.com/api/episode/")

  return (
    <React.Fragment>
      {response.loaded &&
        <section className='episodes-list--container'>
          <SectionHeader
            loaded={response.loaded}
            items={response.items.results}
            title="Rick and Morty's Episodes"
            info={response.items.info.count}
          />
          <ul className='episodes-list'>
            {response.items.results.map((episode)=> (
                <Episode episode={episode}/>
              ))
            }
          </ul>
        </section>
      }

      {!response.loaded &&
        <Skeleton />
      }

    </React.Fragment>
  )
}

export { Episodes };