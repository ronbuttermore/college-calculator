import React, { useRef, useState, useEffect } from 'react';
import './SavedSearch.css';

function SavedSearch() {
    const [checked, setChecked] = React.useState(false);
    function handleChange(e) {
        setChecked(e.target.checked);
     }
    return (
        <div id='saved-searches'>
            <h2 className='saved-search-section-tile'>Saved Searches</h2>
            <div className='saved-search-container'>
                <div className='saved-search-box'>
                    <div className='saved-box-title'>
                        <h4 className='saved-search-title'>University Name</h4>
                        <input value = "test" type = "checkbox" onChange = {handleChange} />
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
                </div>
            </div>
        </div>
    );
};

export default SavedSearch;