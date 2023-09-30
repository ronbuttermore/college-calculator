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

  input SearchInput {
    _id: ID
    university: String
    major: String
    loanAmount: Int
    interestRate: Int
    loanTerm: Int
    annualSalary: Int
    stateTaxPercentage: Int
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    searches: [Search]
    user(id: ID!): User
    search(id: ID!): Search
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSearch(searchData: SearchInput!): User
    removeSearch(searchId: ID!): Search
  }
`;

module.exports = typeDefs;
