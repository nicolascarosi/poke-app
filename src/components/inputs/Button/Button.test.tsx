import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('Button component', () => {
  it('should render component correctly', () => {
    render(<Button label="Button text" />);
    const element = screen.getByRole('button');

    expect(element).toBeInTheDocument();
  });

  it('renders the label', () => {
    render(<Button label="Button text" />);
    const element = screen.getByRole('button', {
      name: /button text/i,
    });

    expect(element).toBeInTheDocument();
  });

  it('is disabled', () => {
    render(<Button label="Button disabled" disabled />);
    const element = screen.queryByRole('button');

    expect(element).toBeDisabled();
  });
});
