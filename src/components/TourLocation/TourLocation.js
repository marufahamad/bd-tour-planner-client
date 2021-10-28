import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const TourLocation = ({ location }) => {
    const { name, img, minPerson, perPersonCost, homeDescription } = location
    console.log(location)
    return (
        <Col>
            <Card>
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
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TourLocation;


<div>

</div>