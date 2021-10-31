import React from 'react';
import { Col, Row } from 'react-bootstrap';

const showImg = url => {

    alert("Gallery under construction")
}

const PreviousTours = () => {
    return (
        <div className="w-75 mx-auto">
            <h2 className="text-primary "><strong>OUR PREVIOUS TOUR GALLERY</strong></h2>
            <Row>
                <Col sm={6} className="p-0">
                    <img onClick={() => showImg()} className="w-100" src="https://i.ibb.co/mXqV3mr/8x16.jpg" alt="" />
                </Col>
                <Col sm={6} className="">
                    <Row>
                        <Col sm={6} className="">
                            <Row>
                                <Col sm={12} className="p-0">
                                    <img onClick={() => showImg()} className="w-100" src="https://i.ibb.co/PMmJhsq/4x4.jpg" alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} className="p-0">
                                    <img onClick={() => showImg()} className="w-100" src="https://i.ibb.co/p0jXq65/2x4.jpg" alt="" />
                                </Col>
                                <Col sm={6} className="">
                                    <Row>
                                        <Col sm={6} className="">
                                            <Row>
                                                <Col sm={12} className="p-0">
                                                    <img onClick={() => showImg()} className="w-100" src="https://i.ibb.co/0yxpgLS/1x1-1.jpg" alt="" />
                                                </Col>
                                                <Col sm={12} className="p-0">
                                                    <img onClick={() => showImg()} className="w-100" src="https://i.ibb.co/N9LdWT2/1x1-2.jpg" alt="" />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col sm={6} className="p-0">
                                            <img onClick={() => showImg()} className="w-100" src="https://i.ibb.co/SQhLbmZ/1x2.jpg" alt="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} className="p-0">
                                            <img onClick={() => showImg()} className="w-100" src="https://i.ibb.co/t8BSfWd/2x2.jpg" alt="" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                        <Col sm={6} className="p-0">
                            <img onClick={() => showImg()} className="w-100" src="https://i.ibb.co/SPb55m3/Exif-JPEG-420.jpg" alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className="p-0">
                            <img onClick={() => showImg()} className="w-100" src="https://i.ibb.co/4ZY3Ds5/8x8.jpg" alt="" />
                        </Col>
                    </Row>
                </Col>


            </Row>

        </div>
    );
};

export default PreviousTours;