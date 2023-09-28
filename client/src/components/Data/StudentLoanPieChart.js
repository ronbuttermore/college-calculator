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
      hole: .3,
      type: 'pie',
      marker: {
        colors: ['#FFF200', '#0076AA', '#00C9FF'],
      },
    },
  ];

  const layout = {
    // title: 'Student Loan Details',
    // autosize: false,
    // width: 500,
    // height: 500,
    // margin: {
    //   l: 50,
    //   r: 50,
    //   b: 100,
    //   t: 100,
    //   pad: 4
    // },
    legend: {
      orientation: 'h', // Horizontal legend
      x: 0, // Adjust the x position of the legend as needed
      y: -0.1, // Adjust the y position of the legend as needed
      traceorder: 'normal', // Display legend items in the order they appear in the data array
      font: {
        family: '"Montserrat", sans-serif',
        size: 12,
        color: '#000', // Legend text color
      },
    },
  };

  const chartContainerStyle = {
    border: "2px solid #BABABA", // Thin border
    borderRadius: '2rem', // Rounded corners
    // boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
    // padding: '10px', // Add some padding to separate the chart from the container
    // maxWidth: '690px', // Set a maximum width as needed
    minWidth: '500px',
    width: '80vw',
    margin: '20px auto', // Adjust the margin to position the container vertically and horizontally
    textAlign: 'center', // Center the chart within the container
  };

  const dataTitleStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#00A1CC",
    borderRadius: "2rem 2rem 0 0",
    padding: "1rem 0.5rem",
    color: "white",
    fontWeight: "400",
    fontSize: "25px"
  }

  const plotStyle = {
    margin: "0.5rem",
    // marginTop: "-1rem",
    // backgroundColor: "transparent",
  }

  const dataContnetStyle = {
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // textAlign: "left",
    padding: "1rem",
  }

  const infoStyle = {
    padding: "0 0.5rem",
    // fontSize: "small",
    fontWeight: "500",
    lineHeight: "1.6"
  }

  return (
    <div style={chartContainerStyle}>
      <h1 style={dataTitleStyle}>Student Loan Details</h1>
      <div style={plotStyle}>
        <Plot data={data} layout={layout} />
        <div style={dataContnetStyle}>
          <p style={infoStyle}>
            <strong>Monthly Payment:</strong> ${monthlyPayment.toFixed(2)} 
            &nbsp;&nbsp;<strong>Total Principal:</strong> ${totalPrincipal.toFixed(2)} <br />
            <strong>Total Interest:</strong> ${totalInterest.toFixed(2)} 
            &nbsp;&nbsp;<strong>Total Payments:</strong> ${totalPayments.toFixed(2)} <br />
            <strong>Loan Term:</strong> {loanTerm} years
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLoanPieChart;
