import { useEffect, useState } from 'react';
import useSWR, { Fetcher } from 'swr';

import {
  Button,
  IPokemon,
  List,
  NavItem,
  PokemonDetails,
  Spinner,
} from '@/components';
import { OFFSET_PAGE_POKEMON_LIST, endpoints } from '@/config';
import { IName } from '@/interfaces';
import { pokeapiService } from '@/services';

const fetcher: Fetcher<{ results: IName[] }, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const Home = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pokemons, setPokemons] = useState<IName[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>();
  const [loadingPokemon, setLoadingPokemon] = useState(false);

  const handleClickNextPage = () => setPageIndex((prevState) => prevState + 1);
  const handleClickPrevPage = () => setPageIndex((prevState) => prevState - 1);

  const { data, isLoading } = useSWR(
    `${endpoints.GET_POKEMONS}?limit=${OFFSET_PAGE_POKEMON_LIST}&offset=${
      pageIndex * OFFSET_PAGE_POKEMON_LIST
    }`,
    fetcher
  );

  useEffect(() => {
    data && setPokemons(data.results);
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
      <nav className="pokemon-list simple-card --no-padding">
        {isLoading ? <Spinner /> : null}
        <List>
          {pokemons.map((pokemon) => (
            <NavItem
              key={`pokemon-${pokemon.name}`}
              id={pokemon.name}
              onClick={handleClickItem}
            >
              {pokemon.name}
            </NavItem>
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
      </nav>
      {/* Pokemon Details */}
      <section className="pokemon-details simple-card">
        {loadingPokemon ? <Spinner /> : null}
        <PokemonDetails pokemon={selectedPokemon} />
      </section>
    </div>
  );
};

export { Home };
