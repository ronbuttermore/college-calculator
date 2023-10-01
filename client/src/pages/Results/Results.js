import React from 'react';
import './Results.css';
import Auth from '../../utils/auth';

import Data from '../../components/Data/data'
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHES } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { REMOVE_SEARCH } from '../../utils/mutations';
import SavedSearch from '../../components/SavedSearch/SavedSearch';

function Results() {

        const currentUser = Auth.getProfile().data.username;

        const [removeSearch, {error}] = useMutation(REMOVE_SEARCH);

        const handleRemove = (event) => {
                event.preventDefault();
                const targetId = event.target.parentElement.id;
                console.log(targetId);
                try {
                   removeSearch({ variables: { searchId: targetId },});
                } catch (err) {
                        console.log(err);
                }
                window.location.reload();
        };

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
                                        handleRemove={handleRemove}
                                        searches={searches}
                                />
                                )}
                        </div>
                </div>
        </div>
        );
};

export default Results;