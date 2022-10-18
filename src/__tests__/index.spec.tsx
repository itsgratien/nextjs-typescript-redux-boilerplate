import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import Home from '../pages';
import { renderWithProviders } from '@/utils/TestUtils';
import { faker } from '@faker-js/faker';
import { server } from '@/mocks/Server';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Home Page', () => {
  test('Display users', async () => {
    const users = [
      {
        username: faker.name.fullName(),
        email: faker.internet.email(),
      },
    ];

    renderWithProviders(<Home />, {
      preloadedState: {
        userReducer: {
          getUsersSuccess: users,
        },
      },
    });

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

    const results = screen.getAllByRole('listitem');

    expect(screen.getByTestId('greeting').textContent).toEqual('List of users');

    expect(results[0].textContent).toEqual(users[0].username);
  });
});
