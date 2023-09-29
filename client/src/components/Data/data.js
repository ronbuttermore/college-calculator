import React, { useState, useEffect } from 'react';
import './data.css';

import PieChart from '../Data/PieChart';
import StudentLoanPieChart from '../Data/StudentLoanPieChart';
import YearOverYearComparison from '../Data/YearOverYearComparison';

import LoanForm from '../Forms/LoanForm'

const Data = () => {
  //Define loan details
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(10);

  // Define income and tax details
  const [monthlyLoanPayment, setMonthlyLoanPayment] = useState(0);
  const [annualSalary, setAnnualSalary] = useState(80000);
  const [stateTaxPercentage, setStateTaxPercentage] = useState(6);
  const [school,setSchool] = useState("");
  const [major, setMajor] = useState("");


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

  const handleSubmit = (e) => {
    e.preventDefault();
    //fetch goes here
    console.log (loanAmount)
    console.log (interestRate)
    console.log(loanTerm)
    console.log(annualSalary)
    console.log(stateTaxPercentage)

    // You can add code here to handle form submission if needed.
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
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
          school={school}
          setSchool={setSchool}
          major={major}
          setMajor={setMajor}
          
        />
        <button type="submit">Submit</button>
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
    </div>
  );
};

export default Data;