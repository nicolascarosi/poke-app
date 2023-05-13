import { render } from '@testing-library/react';

import { Spinner } from '.';

describe('Spinner component', () => {
  it('should render component correctly', () => {
    const result = render(<Spinner />);
    const element = result.container.querySelector('#loading-spinner');

    expect(element).toBeInTheDocument();
  });
});
