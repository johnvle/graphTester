import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


//SCHEMA
// ! means required true
export const typeDefs = `#graphql
  type User {
    id: ID
    username: String!
    email: String! 
    password: String! 
    collection: [Game!]
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Game {
    id: ID!
    title: String!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }
  type Query {
    users: [User]
    user(id: ID!): User
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    addUser(user: AddUserInput!): User
    # deleteUser(id: ID!): [Game]
    # updateGame(id: ID!, edits: EditGameInput!): Game
  }
  input AddUserInput {
    username: String!
    email: String! 
    password: String! 
  }
`;