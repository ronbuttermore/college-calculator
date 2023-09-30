import React from 'react';
import './Form.css';
//import Data from '../Data/data';
//import { useQuery } from '@apollo/client';
//import { QUERY_SEARCHES } from '../../utils/queries';



function LoanForm({
  loanAmount, setLoanAmount,
  interestRate, setInterestRate,
  loanTerm, setLoanTerm,
  university, setUniversity,
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
  if (name === "loanAmount") {
    setLoanAmount(value)
  } else if (name === "interestRate") {
    setInterestRate(value)
  } else if (name === "loanTerm") {
    setLoanTerm(value)
  } else if (name === "university") {
    setUniversity(value) 
  } else if (name === "major") {
    setMajor(value)
  } else if (name === "annualSalary") {
    onAnnualSalaryChange(value)
  } else if (name === "stateTaxPercentage") {
    stateTaxPercentage(value)
  }

};

const userFormStyle = {
  fontSize: "24px",
  padding: "0.5rem",
  margin: "1rem 0",
};

const formLabelStyle = {

}

const formTitleStyle = {

}

  return (
    <div style={userFormStyle}>
      <h2 style={formTitleStyle}>Loan Details</h2>
      <label style={formLabelStyle}>
        Loan Amount:
        <input
          type="number"
          name='loanAmount'
          value={loanAmount}
          onChange={(e) => onLoanAmountChange(Number(e.target.value), handleChange)}
        />
      </label>
      <br />
      <label style={formLabelStyle}>
        Interest Rate (%):
        <input
          type="number"
          name="interestRate"
          value={interestRate}
          onChange={(e) => onInterestRateChange(Number(e.target.value), handleChange)}
        />
      </label>
      <br />
      <label style={formLabelStyle}>
        Loan Term (years):
        <input
          type="number"
          name='loanTerm'
          value={loanTerm}
          onChange={(e) => onLoanTermChange(Number(e.target.value), handleChange)}
        />
      </label>

      <h2 style={formTitleStyle}>Education Details</h2>
      <label style={formLabelStyle}>
        School:
        <input type="text" name="university" value={university} onChange={handleChange} />
      </label>
      <br />
      <label style={formLabelStyle}>
        Major:
        <input type="text" name='major' value={major} onChange={handleChange}/>
      </label>

      <h2 style={formTitleStyle}>Income and Tax Details</h2>
      <label style={formLabelStyle}>
        Annual Salary:
        <input
          type="number"
          name="annualSalary"
          value={annualSalary}
          onChange={(e) => onAnnualSalaryChange(Number(e.target.value), handleChange)}
        />
      </label>
      <br />
      <label style={formLabelStyle}>
        State Tax Percentage (%):
        <input
          type="number"
          name="stateTaxPercentage"
          value={stateTaxPercentage}
          onChange={(e) => onStateTaxPercentageChange(Number(e.target.value), handleChange)}
        />
      </label>
    </div>
    
  );
}

export default LoanForm;
