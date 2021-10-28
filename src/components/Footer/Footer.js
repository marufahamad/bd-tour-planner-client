import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-light mt-2">
            <div className="row">
                <div className="col-md-4 pt-3 my-auto">
                    <h1>BD Tour Planner</h1>
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook m-2"></i></a>
                    <a href="https://twitter.com/"><i className="fab fa-twitter m-2"></i></a>


                </div>
                <div className="col-md-4 my-auto">
                    <ul className="d-flex ">
                        <Link to="/home" className="footer-items">
                            <li>Home</li>
                        </Link>
                        <Link to="/services" className="footer-items">
                            <li>Services</li>
                        </Link>
                        <Link to="/biographies" className="footer-items">
                            <li>Biographies</li>
                        </Link>
                    </ul>
                </div>
                <div className="col-md-4 my-auto text-light">
                    <h3>Why Us?</h3>

                </div>
            </div>
            <p><small> <i className="far fa-copyright"></i> Copyright Act 2020-2022 applicable</small></p>
        </div>

    );
};

export default Footer;