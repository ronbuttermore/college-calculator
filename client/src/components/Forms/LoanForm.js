import React from 'react';

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
  return (
    <div>
      <h2>Loan Details</h2>
      <label>
        Loan Amount:
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => onLoanAmountChange(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Interest Rate (%):
        <input
          type="number"
          value={interestRate}
          onChange={(e) => onInterestRateChange(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Loan Term (years):
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => onLoanTermChange(Number(e.target.value))}
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
          onChange={(e) => onAnnualSalaryChange(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        State Tax Percentage (%):
        <input
          type="number"
          value={stateTaxPercentage}
          onChange={(e) => onStateTaxPercentageChange(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

export default LoanForm;
