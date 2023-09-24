import React from 'react';
import './Results.css';
import Data from '../../components/Data/data';
import UserInput from '../../components/Forms/UserInput';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHES } from '../../utils/queries';

function Results() {

        const { loading, data } = useQuery(QUERY_SEARCHES);
        const searches = data?.searches || [];

        return (
        <div id="landingpage">
                <div id='content'>
                        <h1>Results page</h1>
                        <UserInput />
                        {loading ? (
                                <div>Loading...</div>
                        ) : (
                                <Data
                                        searches={searches}
                                        title="Here is your outlook: "
                                />
                        )}
                </div>
        </div>
        );
};

export default Results;