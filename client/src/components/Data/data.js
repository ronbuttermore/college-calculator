import React from 'react';
import './data.css';

const Data = ({ searches, title }) => {
  if (!searches.length) {
    return <h3>No searches yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {searches &&
        searches.map((search) => (
          <div key={search._id} className='dataItem'>
            <h4>
              {search.university} <br />
              <span style={{ fontSize: '1rem' }}>
                with a degree in {search.degree}
              </span>
            </h4>
            <div>
              <p>{search.noyears} year degree</p>
              <p>Yearly tuition: {search.tuition}</p>
              <p>Scholarships: {search.scholarships}</p>
              <p>Loan Amount: {search.loanAmount}</p>
              <p>Loan Interest: {search.loanInterest}</p>
              <p>Loan Term: {search.loanterm}</p>
              <p>Projected Salary: {search.projectedSalary}</p>
              <p>Searched By: {search.searchedBy}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Data;