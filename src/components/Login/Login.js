import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const [error, setError] = useState('');


    const handleGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.massage)
            })
    }

    return (
        <div className=" body-height">
            <h2 className="my-5">Please Sign In with <i className="fab fa-google"></i>oogle</h2>

            <Button onClick={handleGoogleLogin} variant="warning">Google Sign In</Button>
            <h5>{error}</h5>
        </div>
    );
};

export default Login;