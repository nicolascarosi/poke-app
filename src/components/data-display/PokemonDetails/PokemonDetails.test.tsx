import { render } from '@testing-library/react';

import { PokemonDetails } from '.';

import { IPokemonDetails } from '@/interfaces';

describe('PokemonDetails component', () => {
  const pokemon: IPokemonDetails = {
    name: 'Pikachu',
    id: 25,
    height: 4,
    weight: 60,
    base_experience: 112,
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        },
      },
    },
    stats: [
      { stat: { name: 'hp' }, base_stat: 35 },
      { stat: { name: 'attack' }, base_stat: 55 },
      { stat: { name: 'defense' }, base_stat: 40 },
      { stat: { name: 'special-attack' }, base_stat: 50 },
      { stat: { name: 'special-defense' }, base_stat: 50 },
      { stat: { name: 'speed' }, base_stat: 90 },
    ],
    abilities: [
      { ability: { name: 'static' } },
      { ability: { name: 'lightning-rod' } },
    ],
    types: [{ type: { name: 'electric' } }],
  };

  it('renders the Pokemon name and ID', () => {
    const { getByText, getByRole } = render(
      <PokemonDetails pokemon={pokemon} />
    );

    const name = getByRole('heading', {
      name: /pikachu/i,
    });
    const pokedexNumber = getByText('#25');

    expect(name).toBeInTheDocument();
    expect(pokedexNumber).toBeInTheDocument();
  });

  it('renders the Pokemon image', () => {
    const { getByAltText } = render(<PokemonDetails pokemon={pokemon} />);

    expect(getByAltText('Pikachu')).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    );
  });

  it('renders the Pokemon height, weight, and base experience', () => {
    const { getByText } = render(<PokemonDetails pokemon={pokemon} />);

    expect(getByText('Altura: 4 m')).toBeInTheDocument();
    expect(getByText('Peso: 60 lbs')).toBeInTheDocument();
    expect(getByText('Experiencia base: 112')).toBeInTheDocument();
  });

  it('renders the Pokemon stats', () => {
    const { getByText } = render(<PokemonDetails pokemon={pokemon} />);

    expect(getByText('hp: 35')).toBeInTheDocument();
    expect(getByText('attack: 55')).toBeInTheDocument();
    expect(getByText('defense: 40')).toBeInTheDocument();
    expect(getByText('special-attack: 50')).toBeInTheDocument();
    expect(getByText('special-defense: 50')).toBeInTheDocument();
    expect(getByText('speed: 90')).toBeInTheDocument();
  });

  it('renders the Pokemon abilities', () => {
    const { getByText } = render(<PokemonDetails pokemon={pokemon} />);

    expect(getByText('static')).toBeInTheDocument();
    expect(getByText('lightning-rod')).toBeInTheDocument();
  });

  it('renders the Pokemon types', () => {
    const { getByText } = render(<PokemonDetails pokemon={pokemon} />);

    expect(getByText('electric')).toBeInTheDocument();
  });

  it('renders an empty data message if no Pokemon is selected', () => {
    const { getByText } = render(<PokemonDetails />);

    expect(getByText('¡Selecciona un Pokémon!')).toBeInTheDocument();
  });
});
