const { AuthenticationError } = require('apollo-server-express');
const { User, Test } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('tests');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('tests');
    },
    tests: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Test.find(params).sort({ createdAt: -1 });
    },
    test: async (parent, { testId }) => {
      return Test.findOne({ _id: testId });
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

    addTest: async (parent, { name, savedby }) => {
      const test = await Test.create({ name, savedby });
      await User.findOneAndUpdate(
        { username: savedby },
        { $addToSet: { test: test._id } }
      );
      return test;
    },

    removeTest: async (parent, { testId }) => {
      return Test.findOneAndDelete({ _id: testId });
    },
  }
};

module.exports = resolvers;
