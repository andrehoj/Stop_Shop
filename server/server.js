const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas/index");
const { authMidWare } = require("./utils/auth");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMidWare,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

async function startApolloServer(typeDefs, resolvers) {
  await server.start();
  server.applyMiddleware({ app });
  db.once("open", () => {
    app.listen(PORT, () => {});
  });
}

startApolloServer(typeDefs, resolvers);
