const { User, Keyboard } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    User: async (parent, args, context, info) => {
      return User.find({});
    },
    Keyboard: async (parent, args, context, info) => {
      if (args._id) return Keyboard.find({ _id: args._id });

      if (args.brand === "Any" || !args.brand) return Keyboard.find({});

      if (args.brand) return Keyboard.find({ brand: args.brand });
    },
  },

  Mutation: {
    addUser: async (parent, args, context, info) => {
      const user = await User.create(args);
      console.log(user);
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
