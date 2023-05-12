import { endpoints } from '@/config';

export const pokeapiService = {
  getPokemonById: async (id: string) =>
    await fetch(`${endpoints.GET_POKEMONS}/${id}`).then((response) =>
      response.json()
    ),
};
