import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const StudentLoanPieChart = ({ loanAmount, interestRate, loanTerm }) => {
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPrincipal, setTotalPrincipal] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    // Calculate monthly payment, total principal, and total interest
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = loanTerm * 12;
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyPaymentValue =
  (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
  (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    const totalPrincipalValue = loanAmount;
    const totalInterestValue =
      monthlyPaymentValue * numberOfPayments - loanAmount;

    setMonthlyPayment(monthlyPaymentValue);
    setTotalPrincipal(totalPrincipalValue);
    setTotalInterest(totalInterestValue);
  }, [loanAmount, interestRate, loanTerm]);

  const totalPayments = monthlyPayment * (loanTerm * 12);

  const data = [
    {
      labels: ['Monthly Payment', 'Total Principal', 'Total Interest'],
      values: [monthlyPayment, totalPrincipal, totalInterest],
      type: 'pie',
      marker: {
        colors: ['#27374D', '#526D82', '#9DB2BF'],
      },
    },
  ];

  const layout = {
    title: 'Student Loan Details',
    legend: {
      orientation: 'h', // Horizontal legend
      x: 0, // Adjust the x position of the legend as needed
      y: -0.1, // Adjust the y position of the legend as needed
      traceorder: 'normal', // Display legend items in the order they appear in the data array
      font: {
        family: 'Arial',
        size: 12,
        color: '#000', // Legend text color
      },
    },
  };

  const chartContainerStyle = {
    border: '1px solid #ccc', // Thin border
    borderRadius: '10px', // Rounded corners
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
    padding: '10px', // Add some padding to separate the chart from the container
    maxWidth: '690px', // Set a maximum width as needed
    margin: '20px auto', // Adjust the margin to position the container vertically and horizontally
    textAlign: 'center', // Center the chart within the container
  };

  return (
    <div style={chartContainerStyle}>
      <Plot data={data} layout={layout} />
      <div>
        <strong>Monthly Payment:</strong> ${monthlyPayment.toFixed(2)}
      </div>
      <div>
        <strong>Total Principal:</strong> ${totalPrincipal.toFixed(2)}
      </div>
      <div>
        <strong>Total Interest:</strong> ${totalInterest.toFixed(2)}
      </div>
      <div>
        <strong>Total Payments:</strong> ${totalPayments.toFixed(2)}
      </div>
      <div>
        <strong>Loan Term:</strong> {loanTerm} years
      </div>
    </div>
  );
};

export default StudentLoanPieChart;
