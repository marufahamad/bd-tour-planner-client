import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';


const BookNow = () => {
    const { locationId } = useParams();
    const [location, setLocation] = useState({});
    const { register, handleSubmit, reset } = useForm();







    useEffect(() => {
        fetch(`https://fathomless-coast-49786.herokuapp.com/tours/${locationId}`)
            .then(res => res.json())
            .then(data => setLocation(data))
    }, []);

    const { user } = useAuth();
    const { displayName, email } = user;
    const selectedLocation = location.name;

    const onSubmit = data => {
        data.location = { selectedLocation }
        data.status = "pending"
        console.log(data);
        axios.post('https://fathomless-coast-49786.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data)
                    alert("added Successfully");
                    reset();
                }
            })

    }
    return (
        <div className="w-75 mx-auto">
            <h1>{location.name}</h1>
            <Row className="mb-4 mx-auto">
                <Col className="my-auto border border-primary border-3 p-3 shadow bg-secondary" md={4}>
                    <h4>Place your Booking Info.</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-input my-2 w-100" {...register("name", { required: true })} value={displayName} />
                        <br />
                        <input className="form-input my-2 w-100" {...register("email", { required: true })} value={email} />
                        <br />
                        <input className="form-input my-2 w-100" {...register("address", { required: true })} placeholder="Address" />
                        <br />
                        <input className="form-input my-2 w-100" type="number" {...register("mobile", { required: true, minLength: 11 })} placeholder="11 Digit Mobile Number" />
                        <br />
                        <input className="bg-primary shadow-lg " type="submit" value="Book Now" />
                    </form>
                </Col>
                <Col md={8}>
                    <img width="95%" className="my-3 shadow-lg" src={location.img} alt="" />
                </Col>
            </Row>
            <div className="border">
                <h5>Tour Duration: {location.duration}</h5>
                <h4> Per Person: BDT {location.perPersonCost}</h4>
                <h5>Minimum Person require for the Tour: {location.minPerson}</h5>
                <h4>Location Description: </h4>
                <p>{location.descriptions}</p>
                <h4>Tour Plan:</h4>
                <p>{location.tourPlan}</p>
            </div>

        </div>
    );
};

export default BookNow;