import { render, screen } from '@testing-library/react';
import Home from '../pages';

describe('Home Page', () => {
  test('without crashing', () => {
    render(<Home />);

    expect(screen.getByTestId('greeting').textContent).toEqual('Hello world!');
  });
});
