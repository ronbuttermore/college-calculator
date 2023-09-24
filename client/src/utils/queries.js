import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      searches {
        _id
        university
        degree
        noyears
        tuition
        scholarships
        loanAmount
        loanInterest
        loanTerm
        projectedSalary
        searchedBy
      }
    }
  }
`;

export const QUERY_SEARCHES = gql`
  query getSearch {
    searches {
      _id
      university
      degree
      noyears
      tuition
      scholarships
      loanAmount
      loanInterest
      loanTerm
      projectedSalary
      searchedBy
    }
  }
`;