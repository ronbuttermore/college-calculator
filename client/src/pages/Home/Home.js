import React from 'react';
import './Home.css';
import Auth from '../../utils/auth';
import Results from '../Results/Results'
import Welcome from '../../components/Welcome/Welcome';
import SavedSearch from '../../components/SavedSearch/SavedSearch';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHES } from '../../utils/queries';

function Home() {
  const currentUser = Auth.getProfile().data.username;

  console.log(currentUser);

  const { loading, data } = useQuery(QUERY_SEARCHES, { variables: { searchedBy: currentUser }, });

  console.log(data);

  const searches = data?.searches || [];

  return (
      <div>
          <div>
            {Auth.loggedIn() ? (
              <>
                <Results />
                <div>
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <SavedSearch
                  searches={searches}
                />
          )}
          </div>
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