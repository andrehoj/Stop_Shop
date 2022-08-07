const { User, Keyboard } = require("../models");

const resolvers = {
  Query: {
    User: async (parent, args, context, info) => {
      return User.find({});
    },
    Keyboard: async (parent, args, context, info) => {
      return Keyboard.find();
    },
  },
};

module.exports = resolvers;
