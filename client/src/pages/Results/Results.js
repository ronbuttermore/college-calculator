import React from 'react';
import './Results.css';
import Data from '../../components/Data/data';
import UserInput from '../../components/Forms/UserInput';

function Results() {

        return (
                <div id='landingpage'>
                    <h1>Results page</h1>
                    <UserInput />
                    <Data />
                </div>
        );
};

export default Results;