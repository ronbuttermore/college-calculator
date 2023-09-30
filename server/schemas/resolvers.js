const { AuthenticationError } = require('apollo-server-express');
const { User, Search } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({}).populate('searches');
    },
    user: async (parent, args) => {
      return User.findById(args.id).populate('searches');
    },
    searches: async () => {
      return Search.find({});
    },
    search: async (parent, { searchId }) => {
      return await Search.findOne({ _id: searchId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('searches');
      }
      throw new AuthenticationError('You need to be logged in!');
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

    addSearch: async (parent,  { university, major, loanAmount, interestRate, loanTerm, annualSalary, stateTaxPercentage, searchedBy }) => {

      const search = await Search.create({
        university,
        major,
        loanAmount,
        interestRate,
        loanTerm,
        annualSalary,
        stateTaxPercentage,
        searchedBy
      });

      await User.findOneAndUpdate(
        { username: searchedBy },
        { $addToSet: { searches: search._id } }
      );

      return search;
    },
    removeSearch: async (parent, { searchId }, context) => {
      if (context.user) {
        const search = await Search.findOneAndDelete({
          _id: searchId,
          searchedBy: context.user.username,
        });
        return search;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;
