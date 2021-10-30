import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AllTour = ({ booking }) => {
    const { name, email, address, mobile, location, status } = booking;
    const { user } = useAuth();
    // console.log(user.email)
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    // console.log(bookings)

    const handleDelete = (id) => {

        if (user.email === 'maruf.ahamad@gmail.com') {
            const response = window.confirm('Are you sure to Delete');
            if (response) {
                const url = `http://localhost:5000/bookings/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            alert('Deleted Successfully');
                            const remaining = bookings.filter(newBooking => newBooking._id !== id);
                            setBookings(remaining);
                        }
                    })
            }

        }
        else {
            alert('You are not allow to delete. only admin can Delete')
        }
    }

    const handleUpdate = id => {
        console.log(id)
    }

    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{location.selectedLocation}</Card.Title>
                        <Card.Text>
                            Booked By: {name}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Email ID: {email}</ListGroupItem>
                        <ListGroupItem>Address: {address} </ListGroupItem>
                        <ListGroupItem>Mobile: {mobile}</ListGroupItem>
                        <ListGroupItem>Status: {status}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <button onClick={() => handleDelete(booking._id)} className="btn btn-primary mx-3">Delete</button>
                        <button onClick={() => handleUpdate(booking._id)} className="btn btn-primary mx-3">Approve</button>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllTour;