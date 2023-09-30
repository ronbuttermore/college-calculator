const { Search } = require('../models');

const resolvers = {
  Query: {
    searches: async () => {
      return await Search.find({});
    }
  }
};

module.exports = resolvers;
