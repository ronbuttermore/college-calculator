const { Test } = require('../models');

const resolvers = {
  Query: {
    test: async () => {
      return await Test.find({});
    }
  }
};

module.exports = resolvers;
