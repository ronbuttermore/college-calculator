import React, { useState } from 'react';
import './Form.css';
import Data from '../Data/data';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHES } from '../../utils/queries';

const UserInput = () => {

    const [submitState, setSubmitState] = useState({
        university: "",
        degree: "",
        noyears: "",
        tuition: "",
        scholarships: "",
        loanAmount: "",
        loanInterest: "",
        loanTerm: "",
        projectedSalary:""
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setSubmitState ((prev) => {
            return {...prev, [name]: value}
        })
    };

    const loadData = (event) => {
        event.preventDefault();
        setSubmitState(true);
    };

    const { data } = useQuery(QUERY_SEARCHES);
    const searches = data?.searches || [];

    return (
        <div id='inputsearch'>
            <form onSubmit={loadData}>
                <h3>University</h3> <input type="text" name="university" onChange={handleChange}></input>
                <h3>Degree</h3> <textarea name="degree" onChange={handleChange}></textarea>
                <h3>No. Years</h3> <input type="text" name="noyears" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3>Tuition</h3> <input type="text" name="tuition" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3>Scholarships</h3> <input type="text" name="scholarships" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3>Loan Amount</h3> <input type="text" name="loanAmount" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3>Loan Interest</h3> <input type="text" name="loanInterest" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3>Loan Term</h3> <input type="text" name="loanTerm" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3>Projected Salary</h3> <input type="text" name="projectedSalary" onChange={handleChange} pattern= "[0-9]*"></input>
            </form>
            <br />
            <button id='inputsearchbtn' onClick={loadData} >Show Results</button>
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