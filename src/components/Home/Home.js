import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Banner from '../Banner/Banner';
import PreviousTours from '../PreviousTours/PreviousTours';
import TourLocations from '../TourLocations/TourLocations';
import UsersReview from '../UsersReview/UsersReview';

const { isLoading } = useAuth;
const Home = () => {
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div>
            <Banner></Banner>
            <TourLocations></TourLocations>
            <UsersReview></UsersReview>
            <PreviousTours></PreviousTours>
        </div>
    );
};

export default Home;