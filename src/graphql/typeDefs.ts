type Query {
  hello: String
  users: [User]
  posts: [Post]
  comments: [Comment]
}

type User {
  id: Int!
  username: String!
  email: String!
}

type Post {
  id: Int!
  content: String!
  user: User!
  comments: [Comment]
}

type Comment {
  id: Int!
  content: String!
  user: User!
  post: Post!
}
