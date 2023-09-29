import React, { useState }from 'react';
import './Form.css';
import Data from '../Data/data';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHES } from '../../utils/queries';

const userFormStyle = {
  fontSize: "24px",
  padding: "0.5rem",
  borderRadius: "0.5rem",
  border: "2px solid #BABABA",
  backgroundColor: "white",
  margin: "1rem 0",
};

function LoanForm({
  loanAmount,
  interestRate,
  loanTerm,
  monthlyLoanPayment,
  annualSalary,
  stateTaxPercentage,
  onLoanAmountChange,
  onInterestRateChange,
  onLoanTermChange,
  onAnnualSalaryChange,
  onStateTaxPercentageChange,
}) {
  const [submitState, setSubmitState] = useState({
    loanAmount: "",
    interestRate: "",
    loanTerm: "",
    annualSalary: "",
    stateTaxPercentage: "",
    onInterestRateChange: "",
    onLoanTermChange: "",
    onAnnualSalaryChange: "",
    onStateTaxPercentageChange:""
});
const handleChange = (e) => {
  const {name, value} = e.target
  console.log(value)
  setSubmitState ((prev) => {
      return {...prev, [name]: value}
  })
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(submitState);
};


  return (
    <form>
      <h2>Loan Details</h2>
      <label>
        Loan Amount:
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => onLoanAmountChange(Number(e.target.value), handleChange)}
        />
      </label>
      <br />
      <label>
        Interest Rate (%):
        <input
          type="number"
          value={interestRate}
          onChange={(e) => onInterestRateChange(Number(e.target.value), handleChange)}
        />
      </label>
      <br />
      <label>
        Loan Term (years):
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => onLoanTermChange(Number(e.target.value), handleChange)}
        />
      </label>

      <h2>Education Details</h2>
      <label>
        School:
        <input type="text" />
      </label>
      <br />
      <label>
        Major:
        <input type="text" />
      </label>

      <h2>Income and Tax Details</h2>
      <label>
        Annual Salary:
        <input
          type="number"
          value={annualSalary}
          onChange={(e) => onAnnualSalaryChange(Number(e.target.value), handleChange)}
        />
      </label>
      <br />
      <label>
        State Tax Percentage (%):
        <input
          type="number"
          value={stateTaxPercentage}
          onChange={(e) => onStateTaxPercentageChange(Number(e.target.value), handleChange)}
        />
      </label>
    </form>
  );
}

export default LoanForm;
