import userResolvers from './userResolvers';
import postResolvers from './postResolvers';
import commentResolvers from './commentResolvers';

const resolvers = {
  ...userResolvers,
  ...postResolvers,
  ...commentResolvers,
};

export default resolvers;
