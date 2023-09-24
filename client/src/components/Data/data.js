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
          <div key={search._id}>
            <h4>
              {search.university} <br />
              <span style={{ fontSize: '1rem' }}>
                with a degree in {search.degree}
              </span>
            </h4>
            <div>
              <p>{search.noyears} year degree</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Data;