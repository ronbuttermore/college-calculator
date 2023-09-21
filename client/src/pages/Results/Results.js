import React from 'react';
import './Results.css';
import Data from '../../components/Data/Data';
import SavedSearch from '../../components/SavedSearch/SavedSearch';

function Results() {
    return (
        <div>
            <h2>This will be the results page</h2>
            <Data />
            <SavedSearch />
        </div>
    );
};

export default Results;