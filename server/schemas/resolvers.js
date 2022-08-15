const { User, Product } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    User: async (parent, args, context, info) => {
      return User.find({});
    },

    Product: async (parent, args, context, info) => {
      console.log(args);
      if (args._id) return Product.find({ _id: args._id });
      if (args.category && args.category !== "Any")
        return Product.find({ category: args.category });
      return Product.find({});
    },
  },

  Mutation: {
    addUser: async (parent, args, context, info) => {
      const userEmail = await User.find({ email: args.email });
      console.log(userEmail);
      if (userEmail.length) throw new AuthenticationError("Email is taken");

      const user = await User.create(args);

      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }, context, info) => {
      const user = User.find({ email });

      if (!user) throw new AuthenticationError("Incorrect Credentials");

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword)
        throw new AuthenticationError("Incorrect Credentials");

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
