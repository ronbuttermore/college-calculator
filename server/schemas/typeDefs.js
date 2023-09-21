const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Test {
    _id: ID
    name: String
    testnumber: Int
    testok: Boolean
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    test: [Test]
  }
`;

module.exports = typeDefs;
