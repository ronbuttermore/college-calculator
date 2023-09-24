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
    degree: String
    noyears: Int
    tuition: Int
    scholarships: Int
    loanAmount: Int
    loanInterest: Int
    loanTerm: Int
    projectedSalary: Int
    searchedBy: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    searches(username: String): [Search]
    search(searchId: ID!): Search
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSearch(name: String!, savedBy: String!): Search
    removeSearch(searchId: ID!): Search
  }
`;

module.exports = typeDefs;
