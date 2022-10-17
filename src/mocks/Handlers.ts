import { rest } from 'msw';
import { faker } from '@faker-js/faker';

const users = [
  {
    username: faker.name.fullName(),
    email: faker.internet.email(),
  },
  {
    username: faker.name.fullName(),
    email: faker.internet.email(),
  },
  {
    username: faker.name.fullName(),
    email: faker.internet.email(),
  },
];

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    const ms = 1000 * 2;
    return res(ctx.delay(ms), ctx.json({ data: users }));
  }),
];
