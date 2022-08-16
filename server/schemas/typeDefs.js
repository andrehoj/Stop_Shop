const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    favoriteProducts: [String]
  }

  type Ratings {
    rate: String
    count: String
  }

  type Product {
    _id: ID
    title: String
    image: String
    description: String
    category: String
    price: String
    rating: Ratings
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    User(email: String): [User]
    Product(advancedSort: String, category: String): [Product]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
