import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.json({ username: 'test' }), ctx.status(200));
  }),
];
