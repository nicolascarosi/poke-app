import { IPokemonAbility, IPokemonStat, IPokemonType } from '@/interfaces';

interface IPokemon {
  name: string;
  base_experience: number;
  height: number;
  id: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  abilities: IPokemonAbility[];
  stats: IPokemonStat[];
  types: IPokemonType[];
}

interface IPokemonDetailsProps {
  pokemon?: IPokemon;
}

export type { IPokemon, IPokemonDetailsProps };
