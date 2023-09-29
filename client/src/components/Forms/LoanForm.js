import React from 'react';
import './Form.css';
//import Data from '../Data/data';
//import { useQuery } from '@apollo/client';
//import { QUERY_SEARCHES } from '../../utils/queries';



function LoanForm({
  loanAmount, setLoanAmount,
  interestRate, setInterestRate,
  loanTerm, setLoanTerm,
  school, setSchool,
  major, setMajor,
  annualSalary,
  stateTaxPercentage,
  onLoanTermChange,
  onAnnualSalaryChange,
  onStateTaxPercentageChange,
  onLoanAmountChange,
  onInterestRateChange

}) {

const handleChange = (e) => {
  let {name, value} = e.target
  if (name = "loanAmount") {
    setLoanAmount(value)
  } else if (name = "interestRate") {
    setInterestRate(value)
  } else if (name = "loanTerm") {
    setLoanTerm(value)
  } else if (name = "school") {
    setSchool(value) 
  } else if (name = "major") {
    setMajor(value)
  } else if (name = "annualSalary") {
    onAnnualSalaryChange(value)
  } else if (name ="stateTaxPercentage") {
    stateTaxPercentage(value)
  }

};
  return (
    <>
      <h2>Loan Details</h2>
      <label>
        Loan Amount:
        <input
          type="number"
          name='loanAmount'
          value={loanAmount}
          onChange={(e) => onLoanAmountChange(Number(e.target.value), handleChange)}
        />
      </label>
      <br />
      <label>
        Interest Rate (%):
        <input
          type="number"
          name="interestRate"
          value={interestRate}
          onChange={(e) => onInterestRateChange(Number(e.target.value), handleChange)}
        />
      </label>
      <br />
      <label>
        Loan Term (years):
        <input
          type="number"
          name='loanTerm'
          value={loanTerm}
          onChange={(e) => onLoanTermChange(Number(e.target.value), handleChange)}
        />
      </label>

      <h2>Education Details</h2>
      <label>
        School:
        <input type="text" name="school" value={school} onChange={handleChange} />
      </label>
      <br />
      <label>
        Major:
        <input type="text" name='major' value={major} onChange={handleChange}/>
      </label>

      <h2>Income and Tax Details</h2>
      <label>
        Annual Salary:
        <input
          type="number"
          name="annualSalary"
          value={annualSalary}
          onChange={(e) => onAnnualSalaryChange(Number(e.target.value), handleChange)}
        />
      </label>
      <br />
      <label>
        State Tax Percentage (%):
        <input
          type="number"
          name="stateTaxPercentage"
          value={stateTaxPercentage}
          onChange={(e) => onStateTaxPercentageChange(Number(e.target.value), handleChange)}
        />
      </label>
    </>
    
  );
}

export default LoanForm;
