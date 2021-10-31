import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title text-warning"><strong>BD Tour Planner</strong><span></span></h5>
                                <p>Like all great travellers, you may seen more than you remember and remember more than you have seen. Be with us to see more beauty of the Nature throughout Bangladesh</p>
                            </div>
                        </div>



                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="widget no-box">
                                <h5 className="widget-title text-warning">Get Started<span></span></h5>
                                <p className="mx-5">Travel is the only thing you buy that makes you richer</p>
                                <Nav.Link className="nav-link" as={Link} to="/home"><i className="fas fa-home"></i> Home</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login <i className="fas fa-sign-in-alt"></i></Nav.Link>

                                <a className="btn" href="https://bit.ly/3m9avif" target="_blank">Subscribe Now</a>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-4">

                            <div className="widget no-box">
                                <h5 className="widget-title text-warning">Contact Us<span></span></h5>

                                <p><a href="info@bdtourplanner.com" title="glorythemes">info@bdtourplanner.com</a></p>
                                <ul className="social-footer2">
                                    <li className=""><a href="https://twitter.com/"><i className="fab fa-twitter m-2"></i></a></li>
                                    <li className=""><a href="https://www.facebook.com/"><i className="fab fa-facebook m-2"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p><small> <i className="far fa-copyright"></i> Copyright Act 2020-2022 applicable</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;


