import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SEARCH = gql`
  mutation addSearch($university: String!, $major: String!, $loanAmount: Int!, $interestRate: Int!, $loanTerm: Int!, $annualSalary: Int!, $stateTaxPercentage: Int!, $searchedBy: String!) {
    addSearch(university: $university, major: $major, loanAmount: $loanAmount, interestRate: $interestRate, loanTerm: $loanTerm, annualSalary: $annualSalary, stateTaxPercentage: $stateTaxPercentage, searchedBy: $searchedBy) {
      _id
      university
      major
      loanAmount
      interestRate
      loanTerm
      annualSalary
      stateTaxPercentage
      searchedBy
    }
  }
`;
 export const REMOVE_SEARCH = gql`
  mutation removeSearch($searchId: ID!) {
    removeSearch(searchId: $searchId) {
      university
      major
      loanAmount
      interestRate
      loanTerm
      annualSalary
      stateTaxPercentage
      searchedBy
    }
  }
 `