import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (

        <div className="mt-2">
            <Carousel fade className="carousel mx-auto">
                <Carousel.Item >

                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Mp3KY3Z/Sun-is-rising-above-lush-jungle.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-warning"><strong>BD Tour Planner</strong></h2>
                        <h4 className="text-success">The world is a book and those who do not travel read only one page</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/hVgYLgx/Sunrise-in-beautiful-park.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className="text-warning"><strong>BD Tour Planner</strong></h2>
                        <h6 className="text-light">The real voyage of discovery consists not in seeking new landscapes, but in having new eyes</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Y84qk6B/c-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className="text-warning"><strong>BD Tour Planner</strong></h2>
                        <h4 className="text-danger">Life is either a daring adventure or nothing at all</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;