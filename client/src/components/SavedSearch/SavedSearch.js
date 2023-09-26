import React, { useRef, useState, useEffect } from 'react';
import './SavedSearch.css';

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SavedSearch() {
    const savedSearchContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        // margin: "1rem 0",
        // padding: "0.5rem",
    }

    const savedSearchStyle = {
        border: "2px solid #BABABA",
        backgroundColor: "white",
        borderRadius: "1rem",
        margin: "0.5rem",
    }

    const boxTitleStyle = {
        display: "flex",
        // flexDirection: "row",
        // alignItems: "center",
        // textAlign: "center",
        // justifyContent: "space-between",
        justifyContent: "center",
        backgroundColor: "#008416",
        // color: "white",
        borderRadius: "1rem 1rem 0 0",
        padding: "1rem 0.5rem",
        // maxWidth: "50vw",
        // width: "25rem",
        
    }

    const deleteStyle = {
        margin: "0 1rem",
        // justifyContent: "left",
    }

    const checkboxStyle = {
        margin: "0 1rem",
        // justifyContent: "right",
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
    return (
        <div id='saved-searches'>
            <h2 className='saved-search-section-tile'>Saved Searches</h2>
            <div className='saved-search-container' style={savedSearchContainerStyle}>
                <div className='saved-search-box' style={savedSearchStyle}>
                    <div className='saved-box-title' style={boxTitleStyle}>
                        <FontAwesomeIcon style={deleteStyle} icon={faTimes} />
                        <h4 className='saved-search-title' style={uiniversityTitleStyle}>UC Denver</h4>
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
                        <p style={infoStyle}>Degree: Degree Name
                            <br /> No. Years: 4
                            <br /> Tution: $00,000.00
                        </p>
                        <p style={infoStyle}>Scholarship: $00,000.00
                            <br /> Loan Amount: $00,000.00
                            <br /> Loan Interest: 0%
                        </p>
                    </div>
                </div>
                {/* second box sample */}
                <div className='saved-search-box' style={savedSearchStyle}>
                    <div className='saved-box-title' style={boxTitleStyle}>
                        <FontAwesomeIcon style={deleteStyle} icon={faTimes} />
                        <h4 className='saved-search-title' style={uiniversityTitleStyle}>Colorado State University</h4>
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
                        <p style={infoStyle}>Degree: Degree Name
                            <br /> No. Years: 4
                            <br /> Tution: $00,000.00
                        </p>
                        <p style={infoStyle}>Scholarship: $00,000.00
                            <br /> Loan Amount: $00,000.00
                            <br /> Loan Interest: 0%
                        </p>
                    </div>
                </div>
                {/* third box sample */}
                <div className='saved-search-box' style={savedSearchStyle}>
                    <div className='saved-box-title' style={boxTitleStyle}>
                        <FontAwesomeIcon style={deleteStyle} icon={faTimes} />
                        <h4 className='saved-search-title' style={uiniversityTitleStyle}>Colorado Mesa University</h4>
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
                        <p style={infoStyle}>Degree: Degree Name
                            <br /> No. Years: 4
                            <br /> Tution: $00,000.00
                        </p>
                        <p style={infoStyle}>Scholarship: $00,000.00
                            <br /> Loan Amount: $00,000.00
                            <br /> Loan Interest: 0%
                        </p>
                    </div>
                </div>
                {/* fourth box sample */}
                <div className='saved-search-box' style={savedSearchStyle}>
                    <div className='saved-box-title' style={boxTitleStyle}>
                        <FontAwesomeIcon style={deleteStyle} icon={faTimes} />
                        <h4 className='saved-search-title' style={uiniversityTitleStyle}>UC Bolder</h4>
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
                        <p style={infoStyle}>Degree: Degree Name
                            <br /> No. Years: 4
                            <br /> Tution: $00,000.00
                        </p>
                        <p style={infoStyle}>Scholarship: $00,000.00
                            <br /> Loan Amount: $00,000.00
                            <br /> Loan Interest: 0%
                        </p>
                    </div>
                </div>
                {/* fifth box sample */}
                <div className='saved-search-box' style={savedSearchStyle}>
                    <div className='saved-box-title' style={boxTitleStyle}>
                        <FontAwesomeIcon style={deleteStyle} icon={faTimes} />
                        <h4 className='saved-search-title' style={uiniversityTitleStyle}>UC Colorado Springs</h4>
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
                        <p style={infoStyle}>Degree: Degree Name
                            <br /> No. Years: 4
                            <br /> Tution: $00,000.00
                        </p>
                        <p style={infoStyle}>Scholarship: $00,000.00
                            <br /> Loan Amount: $00,000.00
                            <br /> Loan Interest: 0%
                        </p>
                    </div>
                </div>
                {/* sixth box sample */}
                <div className='saved-search-box' style={savedSearchStyle}>
                    <div className='saved-box-title' style={boxTitleStyle}>
                        <FontAwesomeIcon style={deleteStyle} icon={faTimes} />
                        <h4 className='saved-search-title' style={uiniversityTitleStyle}>Colorado College</h4>
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
                        <p style={infoStyle}>Degree: Degree Name
                            <br /> No. Years: 4
                            <br /> Tution: $00,000.00
                        </p>
                        <p style={infoStyle}>Scholarship: $00,000.00
                            <br /> Loan Amount: $00,000.00
                            <br /> Loan Interest: 0%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavedSearch;