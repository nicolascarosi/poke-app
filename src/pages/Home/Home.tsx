import { IListItem, List, ListItem, PokemonDetails } from '@/components';

const pokemons: IListItem[] = [
  { entry_number: 1, name: 'Bulbasaur' },
  { entry_number: 4, name: 'Charmander' },
  { entry_number: 7, name: 'Squirtle' },
];

const Home = () => {
  const handleClickItem = (entry_number: number) => {
    console.log(entry_number);
  };

  return (
    <div className="home-container">
      {/* Pokemon List */}
      <div className="simple-card --no-padding">
        <List>
          {pokemons.map((pokemon) => (
            <ListItem
              key={`pokemon-${pokemon.entry_number}`}
              {...pokemon}
              onClick={handleClickItem}
            />
          ))}
        </List>
      </div>
      <div className="simple-card">
        <PokemonDetails />
      </div>
    </div>
  );
};

export { Home };
