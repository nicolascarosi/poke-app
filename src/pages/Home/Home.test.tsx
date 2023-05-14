import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { Home } from '@/pages';

describe('Home', () => {
  const waitForSpinner = async (container: HTMLElement) =>
    await waitForElementToBeRemoved(
      container.querySelector('#loading-spinner')
    );

  it('should display the list of pokemons', async () => {
    render(<Home />);
    const pokemonList = await screen.findByRole('list');

    expect(pokemonList).toBeInTheDocument();
  });

  it('should disable the "Anterior" button on the first page', async () => {
    render(<Home />);
    const prevButton = await screen.findByRole('button', { name: /anterior/i });

    expect(prevButton).toBeDisabled();
  });

  it('should load the next page of pokemons when clicking the "Siguiente" button', async () => {
    const result = render(<Home />);

    await waitForSpinner(result.container);

    const nextButton = await screen.findByRole('button', {
      name: /siguiente/i,
    });

    fireEvent.click(nextButton);

    await waitForSpinner(result.container);

    const pokemonList = await screen.findByRole('list');

    expect(pokemonList.children.length).toBeGreaterThan(0);
  });

  it('should display the details of a pokemon when clicking its item', async () => {
    render(<Home />);

    const pokemonItem = await screen.findByText('bulbasaur');

    fireEvent.click(pokemonItem);
    const pokemonDetails = await screen.findByRole('heading', {
      name: /bulbasaur/i,
    });

    expect(pokemonDetails).toBeInTheDocument();
  });
});
