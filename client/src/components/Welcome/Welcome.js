import React from 'react';
import './Welcome.css'
import Auth from '../../utils/auth';

function Welcome() {
    return (
        <div>
            <p>Hey there, {Auth.getProfile().data.username}!</p>
        </div>
    );
};

export default Welcome;