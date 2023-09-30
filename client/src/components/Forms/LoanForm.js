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
  // padding: "0.5rem",
  margin: "1rem",
  marginTop: "0",
};

const formLabelStyle = {
 fontSize: "18px",
}

const formTitleStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "left",
  padding: "1rem 0.5rem",
  color: "rgb(15, 15, 15)",
  fontWeight: "400",
  fontSize: "25px",
  marginTop: "1rem"
}

// const inputStyle = {
//   position: "relative",
//   width: "240px",
// }

const inputStyle = {
  border: "1.5px solid #BABABA",
  borderRadius: "0.5rem",
  padding: "0.5rem 1rem",
  fontSize: "15px",
  backgroundColor: "#fff",
  width: "100%",
  boxSizing: "border-box",
  color: "#BABABA",
  marginBottom: "0.75rem"
}

const hrStlye = {
  border: "1px solid #BABABA",
  marginTop: "1rem",
}

// const inputImageStyle = {
//   position: "absolute",
//   top: "2px",
//   right: "5px",
// }

  return (
    <div style={userFormStyle}>
      <h2 style={formTitleStyle}>Loan Details</h2>
      <label style={formLabelStyle}>
        Loan Amount:
        {/* <FontAwesomeIcon icon={faDollarSign} /> */}
        <input
          style={inputStyle}
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
          style={inputStyle}
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
          style={inputStyle}
          type="number"
          name='loanTerm'
          value={loanTerm}
          onChange={(e) => onLoanTermChange(Number(e.target.value), handleChange)}
        />
      </label>

      <hr style={hrStlye}/>

      <h2 style={formTitleStyle}>Education Details</h2>
      <label style={formLabelStyle}>
        School:
        <input style={inputStyle} type="text" name="university" value={university} onChange={handleChange} />
      </label>
      <br />
      <label style={formLabelStyle}>
        Major:
        <input style={inputStyle} type="text" name='major' value={major} onChange={handleChange}/>
      </label>

      <hr style={hrStlye}/>

      <h2 style={formTitleStyle}>Income and Tax Details</h2>
      <label style={formLabelStyle}>
        Annual Salary:
        <input
          style={inputStyle}
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
          style={inputStyle}
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
