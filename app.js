const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const dotenv = require("dotenv");
const placeRoutes = require("./src/routes/placeRoutes");
const { typeDefs, resolvers } = require("./src/graphql/schema");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", placeRoutes);

// GraphQL Server
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

module.exports = app;
