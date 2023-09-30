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
        loanAmount
        interestRate
        loanTerm
        annualSalary
        stateTaxPercentage
        searchedBy
        searchedAt
      }
    }
  }
`;

export const QUERY_SINGLE_SEARCH = gql`
  query getSingleSearch($searchId: ID!) {
    search(searchId: $searchId) {
      _id
      university
      major
      loanAmount
      interestRate
      loanTerm
      annualSalary
      stateTaxPercentage
      searchedBy
      searchedAt
    }
  }
`;

export const QUERY_SEARCHES = gql`
  query getSearches($searchedBy: String!) {
    searches(searchedBy: $searchedBy) {
      _id
      university
      major
      loanAmount
      interestRate
      loanTerm
      annualSalary
      stateTaxPercentage
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      searches {
        _id
        university
        major
        loanAmount
        interestRate
        loanTerm
        annualSalary
        stateTaxPercentage
        searchedBy
        searchedAt
      }
    }
  }
`;
