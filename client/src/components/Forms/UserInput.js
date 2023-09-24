import React, { useState } from 'react';
import './Form.css';
import Data from '../Data/data';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHES } from '../../utils/queries';

const UserInput = () => {

    const [submitState, setSubmitState] = useState(false);
    const loadData = (event) => {
        event.preventDefault();
        setSubmitState(true);
    };

    const { data } = useQuery(QUERY_SEARCHES);
    const searches = data?.searches || [];

    return (
        <div id='inputsearch'>
            <form>
                <h3>University</h3> <textarea></textarea>
                <h3>Degree</h3> <textarea></textarea>
                <h3>No. Years</h3> <input type="text" pattern= "[0-9]*"></input>
                <h3>Tuition</h3> <input type="text" pattern= "[0-9]*"></input>
                <h3>Scholarships</h3> <input type="text" pattern= "[0-9]*"></input>
                <h3>Loan Amount</h3> <input type="text" pattern= "[0-9]*"></input>
                <h3>Loan Interest</h3> <input type="text" pattern= "[0-9]*"></input>
                <h3>Loan Term</h3> <input type="text" pattern= "[0-9]*"></input>
                <h3>Projected Salary</h3> <input type="text" pattern= "[0-9]*"></input>
            </form>
            <br />
            <button id='inputsearchbtn' onClick={loadData} >Submit</button>
            {submitState ? (
                <Data
                searches={searches}
                title="(College Name) Results: "
                />
            ) : (
                <>
                </>
            )}
        </div>
    );
};

export default UserInput;