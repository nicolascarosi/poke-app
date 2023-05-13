import { render, screen } from '@testing-library/react';

import { EmptyData } from '.';

describe('EmptyData component', () => {
  it('should render component correctly', () => {
    render(<EmptyData title="Component title" />);
    const element = screen.getByRole('img');

    expect(element).toBeInTheDocument();
  });
});
