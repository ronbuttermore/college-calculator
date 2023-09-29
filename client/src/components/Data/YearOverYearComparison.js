import _ from "lodash";
import PropTypes from "prop-types";
import React, { useEffect, useState, Component } from 'react';
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';

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


const YearOverYearComparison = ({
  annualSalary,
  annualLoanPayment,
  loanTerm,
  state,
}) => {
  const [data, setData] = useState([]);
  const highSchoolGraduateSalaries = {
    Alabama: 30938,
    Alaska: 41251,
    Arizona: 34032,
    Arkansas: 30229,
    California: 37538,
    Colorado: 36095,
    Connecticut: 43313,
    Delaware: 37286,
    Florida: 30479,
    Georgia: 31351,
    Hawaii: 33629,
    Idaho: 30938,
    Illinois: 36095,
    Indiana: 33527,
    Iowa: 33001,
    Kansas: 32816,
    Kentucky: 30479,
    Louisiana: 33001,
    Maine: 32244,
    Maryland: 40305,
    Massachusetts: 41251,
    Michigan: 32849,
    Minnesota: 36778,
    Mississippi: 28447,
    Missouri: 31969,
    Montana: 30479,
    Nebraska: 31248,
    Nevada: 34032,
    NewHampshire: 38157,
    NewJersey: 41251,
    NewMexico: 30479,
    NewYork: 36575,
    NorthCarolina: 30479,
    NorthDakota: 32511,
    Ohio: 34032,
    Oklahoma: 30938,
    Oregon: 33929,
    Pennsylvania: 34562,
    RhodeIsland: 37282,
    SouthCarolina: 30479,
    SouthDakota: 28876,
    Tennessee: 30229,
    Texas: 32244,
    Utah: 36095,
    Vermont: 33001,
    Virginia: 35267,
    Washington: 39188,
    WestVirginia: 30479,
    Wisconsin: 35267,
    Wyoming: 38673,
    Nation: 34259,
  };  

  useEffect(() => {
    const annualSalaryData = [];
    const highSchoolSalaryData = [];
    const years = [];
    const totalEarningsData = [];

    let totalEarningsCollege = 0;
    let totalEarningsHighSchool = 0;

    for (let year = 1; year <= 20; year++) {
      const highSchoolSalary = highSchoolGraduateSalaries[state];
      const adjustedSalary =
        year <= loanTerm
          ? annualSalary - annualLoanPayment
          : annualSalary;

      annualSalaryData.push(adjustedSalary);
      highSchoolSalaryData.push(highSchoolSalary);
      years.push(`Year ${year}`);

      totalEarningsCollege += adjustedSalary;
      totalEarningsHighSchool += highSchoolSalary;

      if (year % 5 === 0 || year === 20) {
        // Calculate the difference between college and high school graduate earnings
        const earningsDifference = (totalEarningsCollege - totalEarningsHighSchool).toFixed(2);

        totalEarningsData.push({
          Year: `Year ${year}`,
          'Total Earnings (College)': totalEarningsCollege.toFixed(2),
          'Total Earnings (High School)': totalEarningsHighSchool.toFixed(2),
          'Earnings Difference': earningsDifference,
        });
      }
    }

    setData([
      {
        x: years,
        y: annualSalaryData,
        type: 'bar',
        name: 'College Graduate',
        marker: {
          color: '#00C9FF',
        },
      },
      {
        x: years,
        y: highSchoolSalaryData,
        type: 'bar',
        name: 'High School Graduate',
        marker: {
          color: '#0076AA',
        },
      },
    ]);

    setTotalEarningsTableData(totalEarningsData);
  }, [annualSalary, annualLoanPayment, loanTerm, state]);

  const layout = {
    autosize: true,
    // title: `Year Over Year Comparison`,
    xaxis: {
      title: 'Year',
    },
    yaxis: {
      title: 'Annual Salary',
    },
    barmode: 'group', // Display bars side by side
    // width: 640,
    height: 400,
    legend:{
      x:0, y:125
    }
  }

  // var x = window.matchMedia("(max-width: 700px)")

  // let layout;

  // if (x.matches) { // If media query matches
  //   layout = {
  //     autosize: true,
  //     // title: `Year Over Year Comparison`,
  //     xaxis: {
  //       title: 'Year',
  //     },
  //     yaxis: {
  //       title: 'Annual Salary',
  //     },
  //     barmode: 'group', // Display bars side by side
  //     legend:{
  //       x:300, y:300
  //     }
  //   };
    
  // } else {
  //   layout = {
  //     autosize: true,
  //     // title: `Year Over Year Comparison`,
  //     xaxis: {
  //       title: 'Year',
  //     },
  //     yaxis: {
  //       title: 'Annual Salary',
  //     },
  //     barmode: 'group', // Display bars side by side
  //   };
  // }

  const [totalEarningsTableData, setTotalEarningsTableData] = useState([]);

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
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#00A1CC",
    borderRadius: "2rem 2rem 0 0",
    padding: "1rem 0.5rem",
    color: "white",
    fontWeight: "400",
    fontSize: "25px"
  }

  const dataTitle2Style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#00A1CC",
    // borderRadius: "2rem 2rem 0 0",
    padding: "1rem 0.5rem",
    color: "white",
    fontWeight: "400",
    fontSize: "25px"
  }

  const dataContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    margin: "auto",
  }

  const plotStyle = {
    margin: "0.5rem",
    marginTop: "0",
    // backgroundColor: "transparent",
  }

  // const dataContnetStyle = {
  //   padding: "1rem",
  //   fontWeight: "500",
  //   lineHeight: "1.6",
  //   margin: "auto",
  // }

  let dataContnetStyle;

  function changeText(x) {
    if (x.matches) { // If media query matches
      dataContnetStyle = {
        padding: "1rem",
        fontWeight: "500",
        lineHeight: "1.6",
        margin: "auto",
        fontSize: "small",
      };
    } else {
      dataContnetStyle = {
        padding: "1rem",
        fontWeight: "500",
        lineHeight: "1.6",
        margin: "auto",
      };
    }
  };

  var x = window.matchMedia("(max-width: 810px)")
  changeText(x) // Call listener function at run time
  x.addEventListener("change", () => {
    this.changeText();
  }); // Attach listener function on state changes

  return (
    <div style={chartContainerStyle}>
      <h1 style={dataTitleStyle}>Year Over Year Comparison</h1>
      <div style={plotStyle}>
        <ResizableDiv >
          <Plot 
            data={data}
            layout={layout}
            useResizeHandler={true}
            style={{width: "100%", height: "100%"}} />
        </ResizableDiv>
      </div>
      <div className="table-container">
        <h2 style={dataTitle2Style}>Total Earnings Comparison (Every 5 Years)</h2>
        <div style={dataContainerStyle}>
          <table style={dataContnetStyle} className="comparison-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Total Earnings (College)</th>
                <th>Total Earnings (High School)</th>
                <th>Earnings Difference</th>
              </tr>
            </thead>
            <tbody>
              {totalEarningsTableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.Year}</td>
                  <td>${item['Total Earnings (College)']}</td>
                  <td>${item['Total Earnings (High School)']}</td>
                  <td>${item['Earnings Difference']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YearOverYearComparison;
