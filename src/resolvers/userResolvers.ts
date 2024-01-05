import { User } from '../models/User';

export const userResolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      const user = User.create({ username, email, password });
      await user.save();
      return user;
    },
  },
};

export default userResolvers;
