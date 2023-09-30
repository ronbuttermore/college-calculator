import React from 'react';
import './Home.css';
import Auth from '../../utils/auth';
import Results from '../Results/Results'
import Welcome from '../../components/Welcome/Welcome';
import SavedSearch from '../../components/SavedSearch/SavedSearch';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHES } from '../../utils/queries';

function Home() {

  const { loading, data } = useQuery(QUERY_SEARCHES);

  const searches = data?.searches || [];

  return (
      <div>
          <div>
            {Auth.loggedIn() ? (
              <>
                <Results />
                <SavedSearch 
                  searches={searches}
                />
              </>
            ) : (
              <>
                <Welcome />
              </>
            )}
          </div>
      </div>
  );
};

export default Home;