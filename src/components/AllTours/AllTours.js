import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AllTours = () => {
    const [bookings, setBookings] = useState([]);
    const [booking, setBooking] = useState({});
    const { user } = useAuth();


    useEffect(() => {
        fetch('https://fathomless-coast-49786.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [booking])

    const handleDelete = (id) => {

        if (user.email === 'maruf.ahamad@gmail.com') {
            const response = window.confirm('Are you sure to Delete');
            if (response) {
                const url = `https://fathomless-coast-49786.herokuapp.com/bookings/${id}`;
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
        const bookingUpdating = bookings.find(booking => booking._id === id)
        // const updatedStatus = "approved";
        // bookingUpdating.status = updatedStatus;
        setBooking(bookingUpdating)
        const url = `https://fathomless-coast-49786.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');
                    setBooking({})
                }
            })


    }


    return (
        <div className=" body-height">
            <h2>All Users Tours</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    bookings.map(booking => <div key={booking._id}>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{booking.location.selectedLocation}</Card.Title>
                                    <Card.Text>
                                        Booked By: {booking.name}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Email ID: {booking.email}</ListGroupItem>
                                    <ListGroupItem>Address: {booking.address} </ListGroupItem>
                                    <ListGroupItem>Mobile: {booking.mobile}</ListGroupItem>
                                    <ListGroupItem>Status: {booking.status}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-primary mx-3">Delete</button>
                                    <button onClick={() => handleUpdate(booking._id)} className="btn btn-primary mx-3">Approve</button>

                                </Card.Body>
                            </Card>
                        </Col>
                    </div>)
                }
            </Row>
        </div>
    );
};

export default AllTours;