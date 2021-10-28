import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (

        <div className="mt-2">
            <h2>Aneesa Tour Planner</h2>
            <Carousel fade className="carousel w-75 mx-auto">
                <Carousel.Item >

                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Aneesa Tour Planner</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Aneesa Tour Planner</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Aneesa Tour Planner</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;