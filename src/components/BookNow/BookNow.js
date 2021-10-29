import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BookNow = () => {
    const { locationId } = useParams();
    const [location, setLocation] = useState({});



    useEffect(() => {
        fetch(`http://localhost:5000/tours/${locationId}`)
            .then(res => res.json())
            .then(data => setLocation(data))
    }, []);

    console.log(location)

    return (
        <div className="w-75 mx-auto">
            <h1>{location.name}</h1>
            <img width="95%" className="my-3" src={location.img} alt="" />
            <h5>Tour Duration: {location.duration}</h5>
            <h4> Per Person: BDT {location.perPersonCost}</h4>
            <h5>Minimum Person require for the Tour: {location.minPerson}</h5>
            <h4>Location Description: </h4>
            <p>{location.descriptions}</p>
            <h4>Tour Plan:</h4>
            <p>{location.tourPlan}</p>

        </div>
    );
};

export default BookNow;