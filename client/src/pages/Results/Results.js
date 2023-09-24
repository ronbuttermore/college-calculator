import React from 'react';
import './Results.css';
import Data from '../../components/Data/data';
import UserInput from '../../components/Forms/UserInput';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHES } from '../../utils/queries';
import Auth from '../../utils/auth';

function Results() {

        const { loading, data } = useQuery(QUERY_SEARCHES);
        const searches = data?.searches || [];

        return (
        <div id="landingpage">
                <div id='content'>
                        <span className="loggedin-name" >Welcome {Auth.getProfile().data.username}!</span>
                        <UserInput />
                        {loading ? (
                                <div>Loading...</div>
                        ) : (
                                <Data
                                        searches={searches}
                                        title="(College Name) Results: "
                                />
                        )}
                </div>
        </div>
        );
};

export default Results;