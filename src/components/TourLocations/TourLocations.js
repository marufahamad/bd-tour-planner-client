import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TourLocation from '../TourLocation/TourLocation';
import './TourLocations.css'

const TourLocations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => setLocations(data))
    }, []);
    return (
        <div className="mt-3 tour-locations mx-auto">
            <h2>Tour Locations</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    locations.map(location => <TourLocation
                        key={location._id}
                        location={location}
                    ></TourLocation>)
                }
            </Row>

        </div>
    );
};

export default TourLocations;