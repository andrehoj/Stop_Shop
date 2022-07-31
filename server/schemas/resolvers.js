const resolvers = {
  Query: {
    helloWorld: async (parent, args, context, info) => {
      return "Hello World";
    },
  },
};

module.exports = resolvers;
