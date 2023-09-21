import React from 'react';
import './Results.css';
import { useQuery } from '@apollo/client';
import Data from '../../components/Data/Data';
import SavedSearch from '../../components/SavedSearch/SavedSearch';
import { QUERY_TESTS } from '../../utils/queries';

function Results() {

    const { loading, data } = useQuery(QUERY_TESTS);
    const tests = data?.tests || [];

    return (
        <main>
            <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Data
                tests={tests}
                title="Some Test(s)..."
                />
            )}
            <SavedSearch />
            </div>
    </main>
    );
};

export default Results;