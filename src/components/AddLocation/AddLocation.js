import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';


const AddLocation = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    console.log(user.email);
    const onSubmit = data => {

        if (user.email === "maruf.ahamad@gmail.com") {
            axios.post('https://fathomless-coast-49786.herokuapp.com/tours', data)
                .then(res => {
                    if (res.data.insertedId) {
                        // console.log(res.data)
                        alert("New Location added Successfully");
                        reset();
                    }
                })
        }
        else {
            alert('You dont have permission to add a new Tour, Only Authorize person can add.')
        }

    }

    return (
        <div className=" body-height">
            <h2>Add A New Location</h2>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input className="w-75 m-2" {...register("name", { required: true })} placeholder="Location Name" />
                <input className="w-75 m-2" {...register("img", { required: true })} placeholder="Provide Image URL" />
                <input type="number" className="w-75 m-2" {...register("minPerson", { required: true })} placeholder="No of minimum person" />
                <input type="number" className="w-75 m-2" {...register("perPersonCost", { required: true })} placeholder="Required cost per person" />
                <input className="w-75 m-2" {...register("duration", { required: true })} placeholder="Tour Duration" />
                <textarea className="w-75 m-2" {...register("homeDescription")} placeholder="Short description for home page" />
                <br />
                <textarea className="w-75 m-2" {...register("descriptions")} placeholder="Broad description" />
                <br />
                <textarea className="w-75 m-2" {...register("tourPlan")} placeholder="Tour Plan" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddLocation;