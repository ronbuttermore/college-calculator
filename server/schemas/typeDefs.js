const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Test {
    _id: ID
    name: String
    testnumber: Int
    testok: Boolean
  }

  type Query {
    tests: [Test]!
  }
`;

module.exports = typeDefs;
