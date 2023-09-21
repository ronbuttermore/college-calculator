import React from 'react';
import './Data.css';

const Data = ({ tests, title }) => {
  if (!tests.length) {
    return <h3>No Tests Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {tests &&
        tests.map((test) => (
          <div key={test._id}>
            <h4>
              {test.name} <br />
              <span style={{ fontSize: '1rem' }}>
                this is test number {test.testnumber}
              </span>
            </h4>
              <p>is it working?: {test.testok}</p>
              <p>This test was saved by {test.savedBy}</p>
          </div>
        ))}
    </div>
  );
};

export default Data;