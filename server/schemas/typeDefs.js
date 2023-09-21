const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  tests: [Test]!
}

type Test {
    _id: ID
    name: String
    testnumber: Int
    testok: Boolean
    savedBy: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    tests(username: String): [Test]
    test(testId: ID!): Test
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTest(name: String!, savedBy: String!): Test
    removeTest(testID: ID!): Test
  }
`;

module.exports = typeDefs;
