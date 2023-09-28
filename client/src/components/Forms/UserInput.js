import React, { useState } from 'react';
import './Form.css';
import Data from '../Data/data';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHES } from '../../utils/queries';

const UserInput = () => {

    const userFormStyle = {
        fontSize: "24px",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        border: "2px solid #BABABA",
        backgroundColor: "white",
        margin: "1rem 0",
      };

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
        console.log(value)
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
        <div >
            <form id='inputsearch' onSubmit={loadData}>
                <h3 className='form-name'>University</h3>
                <input style={userFormStyle} type="text" name="university" onChange={handleChange}></input>
                <h3 className='form-name'>Degree</h3>
                <textarea style={userFormStyle} type="text" name="degree" onChange={handleChange}></textarea>
                <h3 className='form-name'>No. Years</h3>
                <input style={userFormStyle} type="text" name="noyears" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3 className='form-name'>Tuition</h3>
                <input style={userFormStyle} type="text" name="tuition" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3 className='form-name'>Scholarships</h3>
                <input style={userFormStyle} type="text" name="scholarships" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3 className='form-name'>Loan Amount</h3>
                <input style={userFormStyle} type="text" name="loanAmount" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3 className='form-name'>Loan Interest</h3>
                <input style={userFormStyle} type="text" name="loanInterest" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3 className='form-name'>Loan Term</h3>
                <input style={userFormStyle} type="text" name="loanTerm" onChange={handleChange} pattern= "[0-9]*"></input>
                <h3 className='form-name'>Projected Salary</h3>
                <input style={userFormStyle} type="text" name="projectedSalary" onChange={handleChange} pattern= "[0-9]*"></input>
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