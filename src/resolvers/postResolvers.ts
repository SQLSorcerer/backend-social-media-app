import { Post } from '../models/Post';

export const postResolvers = {
  Query: {
    posts: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    createPost: async (_, { content, userId }) => {
      const post = Post.create({ content, userId });
      await post.save();
      return post;
    },
  },
};

export default postResolvers;
