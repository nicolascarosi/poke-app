interface IName {
  name: string;
}

interface IPokemonStat {
  base_stat: number;
  stat: IName;
}

interface IPokemonType {
  type: IName;
}

interface IPokemonAbility {
  ability: IName;
}

interface IPokemonDetails {
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

export type {
  IName,
  IPokemonStat,
  IPokemonType,
  IPokemonAbility,
  IPokemonDetails,
};
