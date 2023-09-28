import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

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
          color: 'rgba(55, 128, 191, 0.7)',
        },
      },
      {
        x: years,
        y: highSchoolSalaryData,
        type: 'bar',
        name: 'High School Graduate',
        marker: {
          color: 'rgba(255, 0, 0, 0.7)',
        },
      },
    ]);

    setTotalEarningsTableData(totalEarningsData);
  }, [annualSalary, annualLoanPayment, loanTerm, state]);

  const layout = {
    title: `Year Over Year Comparison`,
    xaxis: {
      title: 'Year',
    },
    yaxis: {
      title: 'Annual Salary',
    },
    barmode: 'group', // Display bars side by side
  };

  const [totalEarningsTableData, setTotalEarningsTableData] = useState([]);

  return (
    <div>
      <Plot data={data} layout={layout} />
      <div className="table-container">
        <h2>Total Earnings Comparison (Every 5 Years)</h2>
        <table className="comparison-table">
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
  );
};

export default YearOverYearComparison;
