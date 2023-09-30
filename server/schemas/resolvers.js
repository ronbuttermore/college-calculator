const { User, Search } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('searches');
    },
    user: async (parent, args) => {
      return await User.findById(args.id).populate('searches');
    },
    searches: async () => {
      return await Search.find({});
    },
    search: async (parent, args) => {
      return await Search.findById(args.id);
    }
  }
};

module.exports = resolvers;
