import React, { useRef, useState, useEffect } from 'react';
import './SavedSearch.css';

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SavedSearch({ searches }) {
    const savedSearchContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
    }

    const savedSearchStyle = {
        border: "2px solid #BABABA",
        backgroundColor: "white",
        borderRadius: "1rem",
        margin: "0.5rem",
    }

    const boxTitleStyle = {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#008416",
        borderRadius: "1rem 1rem 0 0",
        padding: "1rem 0.5rem",
    }

    const deleteStyle = {
        margin: "0 1rem",
    }

    const checkboxStyle = {
        margin: "0 1rem",
    }

    const uiniversityTitleStyle = {
        color: "white",
        fontWeight: "400",
        margin: "0 1rem",
        fontSize: "20px",
    }

    const boxContnetStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "left",
        padding: "1rem",
    }

    const infoStyle = {
        padding: "0 0.5rem",
        fontSize: "small",
        fontWeight: "500",
    }

    const [checked, setChecked] = React.useState(false);
    function handleChange(e) {
        setChecked(e.target.checked);
     }

    if (!searches.length) {
        return <h4>No saved searches yet. . .</h4>;
    }

    return (
        <div id='saved-searches'>
            <h2 className='saved-search-section-tile'>Saved Searches</h2>
            {searches && searches.map((search) => (
            <div className='saved-search-container' style={savedSearchContainerStyle}>
                <div className='saved-search-box' style={savedSearchStyle}>
                    <div className='saved-box-title' style={boxTitleStyle}>
                        <FontAwesomeIcon style={deleteStyle} icon={faTimes} />
                        <h4 className='saved-search-title' style={uiniversityTitleStyle}>{search.university}</h4>
                        <input style={checkboxStyle} value = "test" type = "checkbox" onChange = {handleChange} />
                        <br></br>
                        {checked ? (
                            <div>
                                {/* Checkbox is checked.  */}
                            </div>
                        ) : (
                            <div>
                                {/* Checkbox is not checked. */}
                            </div>
                        )}
                    </div>
                    <div style={boxContnetStyle}>
                        <p style={infoStyle}>Degree: {search.major}
                            <br /> Loan Amount: {search.loanAmount}
                            <br /> Interest Rate: {search.interestRate}
                        </p>
                        <p style={infoStyle}>Loan Term: {search.loanTerm}
                            <br /> Annual Salary: {search.annualSalary}
                            <br /> State Tax Rate: {search.stateTaxPercentage}
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
};

export default SavedSearch;