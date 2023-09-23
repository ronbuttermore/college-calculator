import React from 'react';
import './Comparison.css';
import Data from '../../components/Data/data';
import SavedSearch from '../../components/SavedSearch/SavedSearch';

function Comparison() {
    return (
        <div>
            <h2>This will be the comparison page</h2>
            <Data />
            <SavedSearch />
        </div>
    );
};

export default Comparison;