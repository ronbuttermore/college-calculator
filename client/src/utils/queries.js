import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_TESTS = gql`
  query getTest {
    test {
      _id
      name
      savedBy
      testnumber
      testok
    }
  }
`;