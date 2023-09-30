const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    searches: [Search]
  }
`;

module.exports = typeDefs;
