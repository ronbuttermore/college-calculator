import _ from "lodash";
import PropTypes from "prop-types";
import React, { useEffect, useState, Component } from 'react';
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';

import './data.css';

class ResizableDiv extends Component {
  constructor(props) {
      super(props);
      this.ref = React.createRef();
  }
  componentDidMount() {
      this.observer = new window.ResizeObserver(
          _.debounce(item => window.dispatchEvent(new Event("resize")), 1000)
      );
      this.observer.observe(this.ref.current);
  }
  componentWillUnmount() {
      this.observer.unobserve();
  }
  render() {
      return (
          <div style={{resize: "both", overflow: "hidden"}} ref={this.ref}>
              {this.props.children}
          </div>
      );
  }
}
ResizableDiv.propTypes = {
  children: PropTypes.element,
};

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
      values: [federalTax, stateTax, takeHomePay, studentLoanPayment],
      hole: .3,
      type: 'pie',
      marker: {
        colors: ['#0076AA', '#00FF30', '#00C9FF', '#FFF200'],
      },
    },
  ];

  // const layout = {
  //   title: `Gross Monthly Pay $${(annualSalary / 12).toFixed(2)}`,
  //   legend: {
  //     orientation: 'v', // Horizontal legend
  //     x: 0, // Adjust the x position as needed
  //     y: 0, // Adjust the y position as needed
  //     traceorder: 'normal', // Display legend items in the order they appear in the data array
  //     font: {
  //       family: '"Montserrat", sans-serif',
  //       size: 15,
  //       color: '#000', // Legend text color
  //     },
  //   },
  //   responsive: true,
  //   useResizeHandler: true,
  //   autosize: true,
  //   // width: '100%',
  //   height: 480,
  //   legend:{
  //     x:0, y:-110
  //   }
  // };

  let layout;

  function resizeLayout(x) {
    if (x.matches) { // If media query matches
      layout = {
        title: `Gross Monthly Pay $${(annualSalary / 12).toFixed(2)}`,
        legend: {
          orientation: 'v', // Horizontal legend
          x: 0, // Adjust the x position as needed
          y: 0, // Adjust the y position as needed
          traceorder: 'normal', // Display legend items in the order they appear in the data array
          font: {
            family: '"Montserrat", sans-serif',
            size: 15,
            color: '#000', // Legend text color
          },
        },
        responsive: true,
        useResizeHandler: true,
        autosize: true,
        // width: '100%',
        height: 480,
        legend:{
          x:0, y:-110
        }
      };
    } else {
      layout = {
        title: `Gross Monthly Pay $${(annualSalary / 12).toFixed(2)}`,
        legend: {
          orientation: 'v', // Horizontal legend
          x: -2, // Adjust the x position as needed
          y: +.5, // Adjust the y position as needed
          traceorder: 'normal', // Display legend items in the order they appear in the data array
          font: {
            family: '"Montserrat", sans-serif',
            size: 15,
            color: '#000', // Legend text color
          },
        },
        responsive: true,
        useResizeHandler: true,
        autosize: true,
        // width: '100%',
        // height: '100%'
      };
    }
  }

  var x = window.matchMedia("(max-width: 810px)")
  resizeLayout(x) // Call listener function at run time
  x.addEventListener("change", () => {
    this.resizeLayout();
  }); // Attach listener function on state changes

  const chartContainerStyle = {
    border: "2px solid #BABABA", // Thin border
    borderRadius: '2rem', // Rounded corners
    // boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
    // padding: '10px', // Add some padding to separate the chart from the container
    maxWidth: '1000px', // Set a maximum width as needed
    // minWidth: '500px',
    width: '80vw',
    margin: '20px auto', // Adjust the margin to position the container vertically and horizontally
    textAlign: 'center', // Center the chart within the container
  };

  const dataTitleStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#00A1CC",
    borderRadius: "2rem 2rem 0 0",
    padding: "1rem 0.5rem",
    color: "white",
    fontWeight: "400",
    fontSize: "25px"
  }

  const dataSubtitleStyle = {
    marginTop: "1rem",
  }

  const plotStyle = {
    margin: "0.5rem",
  }

  return (
    <div style={chartContainerStyle}>
      <h1 style={dataTitleStyle}>Future Payment Responsiblity</h1>
      <p style={dataSubtitleStyle}>What does it really look like to repay your student loans? <br />
      Based on current tax rates, here’s the repayment on your projected income.</p>
      <div style={plotStyle}>
        <ResizableDiv >
          <Plot 
            data={data} 
            layout={layout} 
            useResizeHandler={true}
            style={{width: "100%", height: "100%"}}
          />
        </ResizableDiv>
      </div>
    </div>
  );
};

export default PieChart;
