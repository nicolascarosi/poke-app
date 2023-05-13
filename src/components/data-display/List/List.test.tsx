import { render, screen } from '@testing-library/react';

import { List, ListItem } from '.';

describe('List component', () => {
  it('should render component correctly', () => {
    render(<List>...</List>);
    const element = screen.getByRole('list');

    expect(element).toBeInTheDocument();
  });

  it('renders the title when provided', () => {
    render(<List title="My List">...</List>);
    const element = screen.getByRole('heading', {
      name: /my list/i,
    });

    expect(element).toBeInTheDocument();
  });

  it('does not render the title when not provided', () => {
    render(<List>...</List>);
    const element = screen.queryByRole('heading');

    expect(element).not.toBeInTheDocument();
  });

  it('renders the children', () => {
    render(
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );

    const element = screen.getAllByRole('listitem');

    expect(element).toHaveLength(2);
  });
});
