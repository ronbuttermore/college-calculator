import React from 'react';
import './Results.css';
import Auth from '../../utils/auth';

import Data from '../../components/Data/data'
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHES } from '../../utils/queries';
import SavedSearch from '../../components/SavedSearch/SavedSearch';

function Results() {

        const currentUser = Auth.getProfile().data.username;

        const { loading, data } = useQuery(QUERY_SEARCHES, { variables: { searchedBy: currentUser }, });
        
        const searches = data?.searches || [];

        return (
        <div id="landingpage">
                <div id='content'>
                        <span className="loggedin-name" >Welcome {Auth.getProfile().data.username}!</span>
                        {/* <UserInput /> */}
                        <Data />
                        <div>
                                {loading ? (
                                        <div>Loading...</div>
                                ) : (
                                <SavedSearch
                                        searches={searches}
                                />
                                )}
                        </div>
                </div>
        </div>
        );
};

export default Results;