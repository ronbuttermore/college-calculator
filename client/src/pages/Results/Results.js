import React from 'react';
import './Results.css';
import { useQuery } from '@apollo/client';
import Data from '../../components/Data/data';
import SavedSearch from '../../components/SavedSearch/SavedSearch';
import { QUERY_TESTS } from '../../utils/queries';

function Results() {
        const { loading, data } = useQuery(QUERY_TESTS);
        const tests = data?.tests || [];

        return (
                <div>
                    <h1>Results page</h1>
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
        );
};

export default Results;