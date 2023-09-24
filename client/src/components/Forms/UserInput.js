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
            <h3>Here's where the user input form will be</h3>
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