const { AuthenticationError } = require('apollo-server-express');
const { User, Search } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('searches');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('searches');
    },
    searches: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Search.find(params).sort({ createdAt: -1 });
    },
    search: async (parent, { searchId }) => {
      return Search.findOne({ _id: searchId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('searches');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    addSearch: async (parent, { name, searchedBy }) => {
      const search = await Search.create({ name, searchedBy });
      await User.findOneAndUpdate(
        { username: searchedBy },
        { $addToSet: { search: search._id } }
      );
      return search;
    },

    removeSearch: async (parent, { searchId }) => {
      return Search.findOneAndDelete({ _id: searchId });
    },
  }
};

module.exports = resolvers;
