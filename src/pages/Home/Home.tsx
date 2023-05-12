import useSWR, { Fetcher } from 'swr';
import { useEffect, useState } from 'react';

import { Button, List, ListItem, PokemonDetails, Spinner } from '@/components';
import { endpoints } from '@/config';
import { IName } from '@/interfaces';

const OFFSET = 10;

const fetcher: Fetcher<{ results: IName[] }, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const Home = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pokemons, setPokemons] = useState<IName[]>([]);

  const handleClickNextPage = () => setPageIndex((prevState) => prevState + 1);
  const handleClickPrevPage = () => setPageIndex((prevState) => prevState - 1);

  const { data: dataPokemons, isLoading: isLoadingPokemons } = useSWR(
    `${endpoints.GET_POKEMONS}?limit=${OFFSET}&offset=${pageIndex * OFFSET}`,
    fetcher
  );

  useEffect(() => {
    if (dataPokemons) setPokemons(dataPokemons.results);
  }, [dataPokemons]);

  const handleClickItem = (name: string) => {
    console.log(name);
  };

  return (
    <div className="home-container">
      {/* Pokemon List */}
      <div className="simple-card --no-padding">
        {isLoadingPokemons ? <Spinner /> : null}
        <List>
          {pokemons.map((pokemon) => (
            <ListItem
              key={`pokemon-${pokemon.name}`}
              {...pokemon}
              onClick={handleClickItem}
            />
          ))}
        </List>
        <div className="simple-card__footer">
          <Button
            label="Anterior"
            onClick={handleClickPrevPage}
            disabled={pageIndex === 0}
          />
          <Button label="Siguiente" onClick={handleClickNextPage} />
        </div>
      </div>
      <div className="simple-card">
        <PokemonDetails />
      </div>
    </div>
  );
};

export { Home };
