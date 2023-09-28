import React from 'react';
import './Results.css';
import UserInput from '../../components/Forms/UserInput';
import Auth from '../../utils/auth';

import Data from '../../components/Data/data'

function Results() {

        return (
        <div id="landingpage">
                <div id='content'>
                        <span className="loggedin-name" >Welcome {Auth.getProfile().data.username}!</span>
                        {/* <UserInput /> */}
                        <Data />
                </div>
        </div>
        );
};

export default Results;