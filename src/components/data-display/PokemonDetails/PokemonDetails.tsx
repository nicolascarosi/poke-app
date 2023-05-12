import { EmptyData, IPokemonDetails } from '@/components';

const PokemonDetails = ({ pokemon }: IPokemonDetails) => {
  if (!pokemon) return <EmptyData title="¡Selecciona un Pokémon!" />;

  return (
    <section className="pokemon-details">
      <h1>Detalle</h1>
    </section>
  );
};

export { PokemonDetails };
