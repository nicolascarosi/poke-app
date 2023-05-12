import { EmptyData, IPokemonDetailsProps, List, ListItem } from '@/components';

const PokemonDetails = ({ pokemon }: IPokemonDetailsProps) => {
  if (!pokemon) return <EmptyData title="¡Selecciona un Pokémon!" />;

  return (
    <section className="pokemon-details">
      <div className="pokemon-details__header">
        <h1 className="pokemon-details__header__title">{pokemon.name}</h1>
        <p className="pokedex-number">#{pokemon.id}</p>
      </div>
      <div className="pokemon-details__body">
        <div className="pokemon-details__body__main-details">
          <img
            className="pokemon-details__body__main-details__image"
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
          />
          <List>
            <ListItem>Altura: {pokemon.height}</ListItem>
            <ListItem>Peso: {pokemon.weight}</ListItem>
            <ListItem>Experiencia base: {pokemon.base_experience}</ListItem>
          </List>
        </div>
      </div>
      <div className="pokemon-details__body__stats">
        <List title="Estadísticas">
          {pokemon.stats.map((item, i) => (
            <ListItem key={`stat-${i}`}>
              {item.stat.name}: {item.base_stat}
            </ListItem>
          ))}
        </List>
        <div className="pokemon-details__body__stats__right-section">
          <List title="Habilidades">
            {pokemon.abilities.map((item, i) => (
              <ListItem key={`stat-${i}`}>{item.ability.name}</ListItem>
            ))}
          </List>
          <List title="Tipos">
            {pokemon.types.map((item, i) => (
              <ListItem key={`stat-${i}`}>{item.type.name}</ListItem>
            ))}
          </List>
        </div>
      </div>
    </section>
  );
};

export { PokemonDetails };
