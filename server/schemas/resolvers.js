const { User, Keyboard } = require("../models");

const resolvers = {
  Query: {
    User: async (parent, args, context, info) => {
      if (args.email) return User.find({ email: args.email });
      return User.find({});
    },
    Keyboard: async (parent, args, context, info) => {
      if (args.name) return Keyboard.find({ name: args.name });
      return Keyboard.find();
    },
  },
};

module.exports = resolvers;
