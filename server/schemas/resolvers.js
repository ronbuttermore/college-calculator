const { AuthenticationError } = require('apollo-server-express');
const { User, Search } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('searches');
    },
    user: async (parent, args) => {
      return await User.findById(args.id).populate('searches');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('searches');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    searches: async () => {
      return await Search.find({});
    },
    search: async (parent, args) => {
      return await Search.findById(args.id);
    }
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

    addSearch: async (parent,  { university, major, loanAmount, interestRate, loanTerm, annualSalary, stateTaxPercentage }) => {
      return await Search.create({ university, major, loanAmount, interestRate, loanTerm, annualSalary, stateTaxPercentage });
    },

    removeSearch: async (parent, { searchId }) => {
      return Search.findOneAndDelete({ _id: searchId });
    },
  }
};

module.exports = resolvers;
