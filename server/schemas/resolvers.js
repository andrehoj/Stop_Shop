const { User, Keyboard } = require("../models");

const resolvers = {
  Query: {
    User: async (parent, args, context, info) => {
      return User.find({});
    },
    Keyboard: async (parent, args, context, info) => {
      console.log(args);
      if (args._id) return Keyboard.find({ _id: args._id });
      if (args.brand) {
        if (args.brand === "Any") return Keyboard.find();
        return Keyboard.find({ brand: args.brand });
      }
      return Keyboard.find();
    },
  },
};

module.exports = resolvers;
