const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    favoriteKeyBoards: [String]
  }

  type Keyboard {
    _id: ID
    name: String
    coverImage: String
    images: [String]
    description: String
    brand: String
    review: Int
    price: Float
    wireless: Boolean
    inStock: Boolean
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
    Keyboard(_id: ID, brand: String): [Keyboard]
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
