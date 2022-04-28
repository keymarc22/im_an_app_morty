import React from "react";
import { useGetItems } from "../hooks/useGetItems";
import { Character } from "../components/Character";
import { SectionHeader } from "../components/SectionHeader";
import { Skeleton } from '../containers/Skeleton';

const Characters = () => {
  const response = useGetItems("https://rickandmortyapi.com/api/character/");

  return (
    <React.Fragment>
      {response.loaded &&
        <section className="characters-list--container">
          <SectionHeader
            loaded={response.loaded}
            items={response.items.results}
            title="Rick and Morty's Characters"
            info={response.items.info.count}
            />

          <ul className="characters-list">
            {response.items.results.map((character) => (
              <Character
                character={character}
              />
            ))}
          </ul>
        </section>
      }

      {!response.loaded &&
        <Skeleton />
      }
    </React.Fragment>
  );
};

export { Characters };
