import React from 'react';
import './Home.css';
import Auth from '../../utils/auth';
import Results from '../Results/Results'
import Welcome from '../../components/Welcome/Welcome';
import SavedSearch from '../../components/SavedSearch/SavedSearch';

function Home() {
    return (
        <div>
            <div>
              {Auth.loggedIn() ? (
                <>
                  <Results />
                  <SavedSearch />
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