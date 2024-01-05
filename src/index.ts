import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './models/User';
import { Post } from './models/Post';
import { Comment } from './models/Comment';
import { createSchema, createYoga } from 'graphql-yoga';
import { readFileSync } from 'fs';
import { join } from 'path';
import { createServer } from 'node:http'


async function startServer() {
  await createConnection({
    type: 'postgres',
    database: '#',
    username: '#',
    password: '#',
    entities: [User, Post, Comment],
    synchronize: true,
  });

  const typeDefs = readFileSync(join(__dirname, 'graphql/typeDefs.ts'), 'utf-8');
  const resolvers = require('./graphql/resolvers').default;

  const yoga = createYoga({
    schema: createSchema({
      typeDefs,
      resolvers,
    }),
  });

  const server = createServer(yoga)

  server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/graphql');
  });
}

startServer();
