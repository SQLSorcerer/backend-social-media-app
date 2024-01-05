import { Comment } from '../models/Comment';

export const commentResolvers = {
  Query: {
    comments: async () => {
      return await Comment.find();
    },
  },
  Mutation: {
    createComment: async (_, { content, userId, postId }) => {
      const comment = Comment.create({ content, userId, postId });
      await comment.save();
      return comment;
    },
  },
};

