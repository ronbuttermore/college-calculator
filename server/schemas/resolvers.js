const { User, Search } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('searches');
    },
    searches: async () => {
      return await Search.find({});
    }
  }
};

module.exports = resolvers;
