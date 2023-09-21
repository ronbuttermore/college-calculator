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
    savedby: String
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
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTest(name: String!, testnumber: Int!): Test
    removeTest(testID: ID!): Test
  }
`;

module.exports = typeDefs;
