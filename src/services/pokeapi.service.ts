import { endpoints } from '@/config';

export const pokeapiService = {
  getPokemonById: (id: string) =>
    fetch(`${endpoints.GET_POKEMONS}/${id}`).then((response) =>
      response.json()
    ),
};
