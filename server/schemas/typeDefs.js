const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    searches: [Search]!
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
    searchedBy: String
    searchedAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    searches: [Search]
    search(searchId: ID!): Search
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSearch(university: String!, major: String!, loanAmount: Int!, interestRate: Int!, loanTerm: Int!, annualSalary: Int!, stateTaxPercentage: Int!, searchedBy: String! ): Search
    removeSearch(searchId: ID!): Search
  }
`;

module.exports = typeDefs;
