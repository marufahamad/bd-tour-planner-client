import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const NotFound = () => {

    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div className="body-height">
            <img src="https://image.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg" alt="" />
        </div>
    );
};

export default NotFound;