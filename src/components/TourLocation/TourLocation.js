import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TourLocation = ({ location }) => {
    const { name, img, minPerson, perPersonCost, homeDescription, duration, _id } = location

    return (
        <Col>
            <Card className="shadow card-hover">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {homeDescription}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Minimum Person for Tour: {minPerson}</ListGroupItem>
                    <ListGroupItem>Tour Cost for One Person: BDT {perPersonCost}</ListGroupItem>
                    <ListGroupItem>Duration: {duration}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link as={Link} to={`/location/${_id}`}><button className="btn btn-primary">Book Now</button></Card.Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default TourLocation;


<div>

</div>