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

interface IPokemonMove {
  move: IName;
}

interface IPokemonAbility {
  ability: IName;
}

export type {
  IName,
  IPokemonStat,
  IPokemonType,
  IPokemonMove,
  IPokemonAbility,
};
