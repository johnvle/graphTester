// const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const typeDefs = require('./graphql/schema');
// const resolvers = require('./graphql/resolvers');
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';
// import { startStandaloneServer } from '@apollo/server/standalone';

const app = express();

// const PORT = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// Custom middleware example
app.use((req, res, next) => {
  console.log('Custom middleware is running');
  return next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apply Apollo Server's middleware after your custom middleware
// server.applyMiddleware({ app });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
console.log(`server ready at port, 4000`);
