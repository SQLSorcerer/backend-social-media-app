
## Overview

This is a small social media application built using Node.js, TypeScript, PostgreSQL, TypeORM, GraphQL Yoga, and other technologies. The application allows users to create posts, make comments, and interact with each other.

## Tech Stack

- **Node.js:** JavaScript runtime for server-side development.
- **TypeScript:** Superset of JavaScript with static typing.
- **PostgreSQL:** Open-source relational database management system.
- **TypeORM:** Object-Relational Mapping (ORM) library for TypeScript.
- **GraphQL Yoga:** Fully-featured GraphQL server library.
- **Other Dependencies:** Express, bcryptjs, jsonwebtoken, etc.

## Getting Started

### Prerequisites

- Node.js and npm installed
- PostgreSQL database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/social-media-app.git
   ```

2. Install dependencies:

   ```bash
   cd social-media-app
   npm install
   ```

3. Configure the database:

   - Create a PostgreSQL database.
   - Update database connection details in `src/index.ts`.

4. Run the application:

   ```bash
   npm start
   ```

5. Visit `http://localhost:4000` in your browser to explore the GraphQL Playground.

## Project Structure

- **`src/models`:** Contains TypeORM entity models (User, Post, Comment).
- **`src/resolvers`:** GraphQL resolvers for handling queries and mutations.
- **`src/graphql`:** GraphQL schema and resolvers.
- **`src/index.ts`:** Entry point for the application.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the open-source community for providing the tools and libraries used in this project.
