import {
  IPokemonAbility,
  IPokemonMove,
  IPokemonStat,
  IPokemonType,
} from '@/interfaces';

interface IPokemonDetails {
  pokemon?: {
    name: string;
    base_experience: string;
    height: number;
    moves: IPokemonMove[];
    abilities: IPokemonAbility[];
    sprites: {
      front_default: string;
    };
    stats: IPokemonStat[];
    types: IPokemonType[];
  };
}

export type { IPokemonDetails };
