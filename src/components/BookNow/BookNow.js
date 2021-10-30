import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';


const BookNow = () => {
    const { locationId } = useParams();
    const [location, setLocation] = useState({});
    const { register, handleSubmit, reset } = useForm();







    useEffect(() => {
        fetch(`http://localhost:5000/tours/${locationId}`)
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
        axios.post('http://localhost:5000/bookings', data)
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-input" {...register("name", { required: true })} value={displayName} />
                <br />
                <input className="form-input" {...register("email", { required: true })} value={email} />
                <br />
                <input className="form-input" {...register("address", { required: true })} placeholder="Address" />
                <br />
                <input className="form-input" type="number" {...register("mobile", { required: true, minLength: 11 })} placeholder="11 Digit Mobile Number" />
                <br />
                <input type="submit" value="Book Now" />
            </form>
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