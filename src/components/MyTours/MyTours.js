import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './myTours.css'

const MyTours = () => {
    const [bookings, setBookings] = useState([]);
    const { user, isLoading } = useAuth();
    // console.log(user.email)

    useEffect(() => {
        fetch('https://fathomless-coast-49786.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const myBookings = data.filter(booking => booking.email === user.email);
                setBookings(myBookings);
            })
    }, [user.email])

    const handleDelete = (id) => {

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

    // console.log(bookings)
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div>
            <h2>My Tours {bookings.length}</h2>
            <Row xs={1} md={2} lg={3} className="g-4 mx-auto body-height">
                {
                    bookings.map(booking => <div className="" key={booking._id}>

                        <Col>
                            <Card className="shadow card-hover">
                                <Card.Body>
                                    <Card.Title>{booking?.location?.selectedLocation}</Card.Title>
                                    <Card.Text>
                                        Booked By: {booking.name}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Email ID: {booking.email}</ListGroupItem>
                                    <ListGroupItem>Address: {booking.address} </ListGroupItem>
                                    <ListGroupItem>Mobile: {booking.mobile}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-primary">Delete</button>

                                </Card.Body>
                            </Card>
                        </Col>

                    </div>)
                }
            </Row>
        </div>
    );
};

export default MyTours;