const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();

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
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
