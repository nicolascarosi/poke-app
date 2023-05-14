import { useEffect, useState } from 'react';
import useSWR, { Fetcher } from 'swr';

import { Button, List, ListItem, PokemonDetails, Spinner } from '@/components';
import { endpoints } from '@/config';
import { IName, IPokemonDetails } from '@/interfaces';
import { pokeapiService } from '@/services';

const OFFSET = 12;

const fetcher: Fetcher<{ results: IName[] }, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const Home = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pokemons, setPokemons] = useState<IName[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonDetails>();
  const [loadingPokemon, setLoadingPokemon] = useState(false);

  const handleClickNextPage = () => setPageIndex((prevState) => prevState + 1);
  const handleClickPrevPage = () => setPageIndex((prevState) => prevState - 1);

  const { data, isLoading } = useSWR(
    `${endpoints.GET_POKEMONS}?limit=${OFFSET}&offset=${pageIndex * OFFSET}`,
    fetcher
  );

  useEffect(() => {
    if (data) setPokemons(data.results);
  }, [data]);

  const handleClickItem = async (id: string) => {
    try {
      setLoadingPokemon(true);
      const response = await pokeapiService.getPokemonById(id);

      setSelectedPokemon(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingPokemon(false);
    }
  };

  return (
    <div className="home-container">
      {/* Pokemon List */}
      <div className="simple-card --no-padding">
        {isLoading ? <Spinner /> : null}
        <List>
          {pokemons.map((pokemon) => (
            <ListItem
              key={`pokemon-${pokemon.name}`}
              id={pokemon.name}
              onClick={handleClickItem}
            >
              {pokemon.name}
            </ListItem>
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
        {loadingPokemon ? <Spinner /> : null}
        <PokemonDetails pokemon={selectedPokemon} />
      </div>
    </div>
  );
};

export { Home };
