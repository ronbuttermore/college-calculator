import React, { useState, useEffect } from 'react';
import './data.css';

import PieChart from '../Data/PieChart';
import StudentLoanPieChart from '../Data/StudentLoanPieChart';
import YearOverYearComparison from '../Data/YearOverYearComparison';

import LoanForm from '../Forms/LoanForm'
import { useMutation } from '@apollo/client';

import { ADD_SEARCH } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Data = () => {
  //Define loan details
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(10);

  // Define income and tax details
  const [monthlyLoanPayment, setMonthlyLoanPayment] = useState(0);
  const [annualSalary, setAnnualSalary] = useState(80000);
  const [stateTaxPercentage, setStateTaxPercentage] = useState(6);
  const [university,setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const currentUser = Auth.getProfile().data.username;
  const [searchedBy, setSearchedBy] = useState(currentUser);


  useEffect(() => {
    // Calculate loan details when loan input values change
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = loanTerm * 12;
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyPaymentValue =
      (loanAmount * monthlyInterestRate) / denominator +
      (loanAmount / numberOfPayments);

    setMonthlyLoanPayment(monthlyPaymentValue);
  }, [loanAmount, interestRate, loanTerm]);

  const [addSearch, {error}] = useMutation(ADD_SEARCH);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      console.log (loanAmount)
      console.log (interestRate)
      console.log(loanTerm)
      console.log(annualSalary)
      console.log(stateTaxPercentage)
      console.log(university);
      console.log(major);
      console.log(searchedBy);
      const formData = {
        university: university,
        major: major,
        loanAmount: loanAmount,
        interestRate: interestRate,
        loanTerm: loanTerm,
        annualSalary: annualSalary,
        stateTaxPercentage: stateTaxPercentage,
        searchedBy: searchedBy
      };
      const { data } = addSearch({ variables: { ...formData},});
    } catch (err) {
      console.error(err);
    }
    alert('Search Saved!');
  };

  const formStyle = {
    fontSize: "24px",
    padding: "1rem",
    borderRadius: "2rem",
    border: "2px solid #BABABA",
    backgroundColor: "white",
    margin: "1rem 0",
    maxWidth: '1000px',
    width: '80vw',
    margin: '20px auto',
    textAlign: 'left',
  };

  const btnStyle = {
    fontSize: "16px",
    color: "white",
    fontWeight: "500",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.5rem",
    border: "none",
    backgroundColor: "#BABABA",
  }

  return (
    <div className="App">
      <form style={formStyle} onSubmit={handleSubmit}>
        <LoanForm
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          loanTerm={loanTerm}
          setLoanTerm={setLoanTerm}
          monthlyLoanPayment={monthlyLoanPayment}
          annualSalary={annualSalary}
          stateTaxPercentage={stateTaxPercentage}
          onLoanAmountChange={setLoanAmount}
          onInterestRateChange={setInterestRate}
          onLoanTermChange={setLoanTerm}
          onAnnualSalaryChange={setAnnualSalary}
          onStateTaxPercentageChange={setStateTaxPercentage}
          university={university}
          setUniversity={setUniversity}
          major={major}
          setMajor={setMajor}
          
        />
        {/* <button type="submit">Submit</button> */}
        <button type="submit" style={btnStyle}>
          Save Results
        </button>
      </form>

     <div className="chart-container">
         {/* Render the chart components  */}
        <StudentLoanPieChart
          loanAmount={loanAmount}
          interestRate={interestRate}
          loanTerm={loanTerm}
        />
      </div>

      <div className="chart-container">
        <PieChart
          loanAmount={loanAmount}
          interestRate={interestRate}
          loanTerm={loanTerm}
          monthlyLoanPayment={monthlyLoanPayment}
          annualSalary={annualSalary}
          stateTaxPercentage={stateTaxPercentage}
        />
      </div>

       <div className="chart-container">
         {/* Provide dummy data for YearOverYearComparison  */}
        <YearOverYearComparison
          annualSalary={annualSalary}
          annualLoanPayment={monthlyLoanPayment * 12}
          loanTerm={loanTerm}
          state="Colorado"
        />
      </div>

      {/* <div className='save-button-container'>
        <button className="save-btn">
          Save Updated Results
        </button>
        <button type="submit" className="save-btn">
          Save Results
        </button>
      </div> */}
    </div>
  );
};

export default Data;