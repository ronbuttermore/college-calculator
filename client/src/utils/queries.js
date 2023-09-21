import { gql } from '@apollo/client';

export const QUERY_TESTS = gql`
  query getTests {
    tests {
      _id
      name
      testnumber
      testok
    }
  }
`;
