import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './UsersReview.css'

const UsersReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [massages, setMassages] = useState([]);
    // console.log(user)

    // getting information from review API
    useEffect(() => {
        fetch('https://fathomless-coast-49786.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setMassages(data))
    }, [massages])


    // uploading review massage to API
    const onSubmit = data => {
        // console.log(data);
        if (user.email) {
            axios.post('https://fathomless-coast-49786.herokuapp.com/reviews', data)
                .then(res => {
                    if (res.data.insertedId) {
                        // console.log(res.data)
                        alert("Review added Successfully");
                        reset();
                    }
                })
        }
        else {
            alert("Please login before submit review");
        }

    }

    return (
        <div className=" my-2 mb-5  mx-auto">
            <h2 className="text-primary "><strong>USERS REVIEW</strong></h2>
            <Row className="review-row mx-auto border p-4">
                <Col xs={12} md={7} className="review-massage text-start my-auto">
                    {
                        massages.map(massage => <div key={massage._id}>
                            <h5>Name: <small>{massage.name}</small></h5>
                            <p>Massage: <small>{massage.massage}</small></p>
                            <br />
                        </div>)
                    }

                </Col>
                <Col xs={12} md={5} className="my-auto">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input className="review-input" {...register("name", { required: true })} placeholder="Name" value={user?.displayName} />
                        <br />
                        <textarea className="review-area" {...register("massage")} placeholder="Right your Experiences" />
                        <br />
                        <input type="submit" />
                    </form>
                </Col>
            </Row>


        </div>
    );
};

export default UsersReview;