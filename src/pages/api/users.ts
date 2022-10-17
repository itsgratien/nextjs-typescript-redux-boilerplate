// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
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

type Data = {
  data: typeof users;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ data: users });
}
