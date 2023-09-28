import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const PieChart = ({
  loanAmount,
  interestRate,
  loanTerm,
  monthlyLoanPayment,
  annualSalary,
  stateTaxPercentage,
}) => {
  const [federalTax, setFederalTax] = useState(0);
  const [stateTax, setStateTax] = useState(0);
  const [studentLoanPayment, setStudentLoanPayment] = useState(0);
  const [takeHomePay, setTakeHomePay] = useState(0);

  useEffect(() => {
    // Calculate federal tax based on monthly income
    const monthlyIncome = annualSalary / 12;
    let calculatedFederalTax = 0;
  
    if (monthlyIncome <= 916.67) {
      calculatedFederalTax = monthlyIncome * 0.1;
    } else if (monthlyIncome <= 3727.08) {
      calculatedFederalTax = monthlyIncome * 0.12;
    } else if (monthlyIncome <= 7947.92) {
      calculatedFederalTax = monthlyIncome * 0.22;
    } else if (monthlyIncome <= 15175.00) {
      calculatedFederalTax = monthlyIncome * 0.24;
    } else if (monthlyIncome <= 19270.83) { // Adjusted for the 32% bracket
      calculatedFederalTax = monthlyIncome * 0.32;
    }
    // Add more tax brackets as needed
  
    setFederalTax(calculatedFederalTax);
  }, [annualSalary]);  

  useEffect(() => {
    // Calculate state tax based on stateTaxPercentage
    const calculatedStateTax = (annualSalary / 12) * (stateTaxPercentage / 100);
    setStateTax(calculatedStateTax);
  }, [annualSalary, stateTaxPercentage]);

  useEffect(() => {
    // Calculate student loan payment
    setStudentLoanPayment(monthlyLoanPayment);
  }, [monthlyLoanPayment]);

  useEffect(() => {
    // Calculate take-home pay
    const calculatedTakeHomePay =
      (annualSalary / 12) - federalTax - stateTax - studentLoanPayment;
    setTakeHomePay(calculatedTakeHomePay);
  }, [annualSalary, federalTax, stateTax, studentLoanPayment]);
  console.log(federalTax/(annualSalary/12))
  console.log(federalTax)

  const data = [
    {
      labels: [
        `Federal Income Tax     ${((federalTax / (annualSalary / 12)) * 100).toFixed(2)}%     $${federalTax.toFixed(2)}`,
        `<b>Take Home Pay           ${((takeHomePay / (annualSalary / 12)) * 100).toFixed(2)}%    $${takeHomePay.toFixed(2)}</b>`,
        `State Income Tax            ${((stateTax / (annualSalary / 12)) * 100).toFixed(2)}%    $${stateTax.toFixed(2)}`,
        `Student Loan               ${((studentLoanPayment / (annualSalary / 12)) * 100).toFixed(2)}%     $${studentLoanPayment.toFixed(2)}`,
      ],
      values: [federalTax, takeHomePay, stateTax, studentLoanPayment],
      type: 'pie',
      marker: {
        colors: ['#27374D', '#526D82', '#9DB2BF', 'DDE6ED'],
      },
    },
  ];

  const layout = {
    title: `<b>Gross Monthly Pay $${(annualSalary / 12).toFixed(2)}</b> <br>
    What does it really look like to repay your student loans? <br>
    Based on current tax rates, here’s the repayment on your projected income.`,
    legend: {
      orientation: 'v', // Horizontal legend
      x: -2, // Adjust the x position as needed
      y: +.5, // Adjust the y position as needed
      traceorder: 'normal', // Display legend items in the order they appear in the data array
      font: {
        family: 'Arial',
        size: 15,
        color: '#000', // Legend text color
      },
    },
  };

  const chartContainerStyle = {
    border: '1px solid #ccc', // Thin border
    borderRadius: '10px', // Rounded corners
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
    padding: '10px', // Add some padding to separate the chart from the container
    maxWidth: '800px', // Set a maximum width as needed
    margin: '20px auto', // Adjust the margin to position the container vertically and horizontally
    textAlign: 'center', // Center the chart within the container
  };

  return (
    <div style={chartContainerStyle}>
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default PieChart;
