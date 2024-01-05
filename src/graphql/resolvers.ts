// graphql/resolvers.ts
import { userResolvers } from '../resolvers/userResolvers';
import { postResolvers } from '../resolvers/postResolvers';
import { commentResolvers } from '../resolvers/commentResolvers';

const rootResolvers = {
  Query: {
    hello: () => 'Hello from Yoga!',
  },
};

export default [rootResolvers, userResolvers, postResolvers, commentResolvers];
