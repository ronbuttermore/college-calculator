import React from 'react';
import './Home.css';
import Auth from '../../utils/auth';
import Results from '../Results/Results'
import Welcome from '../../components/Welcome/Welcome';

function Home() {

  return (
      <div>
          <div>
            {Auth.loggedIn() ? (
              <>
                <Results />
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