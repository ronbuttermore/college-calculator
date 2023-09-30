const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    searches: [Search]
  }

  type Search {
    _id: ID
    university: String
    major: String
    loanAmount: Int
    interestRate: Int
    loanTerm: Int
    annualSalary: Int
    stateTaxPercentage: Int
  }

  type Query {
    users: [User]
    searches: [Search]
  }
`;

module.exports = typeDefs;
