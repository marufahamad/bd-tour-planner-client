import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllTour from '../AllTour/AllTour';

const AllTours = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div className=" body-height">
            <h2>All Users Tours</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    bookings.map(booking => <AllTour
                        key={booking._id}
                        booking={booking}
                    ></AllTour>)
                }
            </Row>
        </div>
    );
};

export default AllTours;