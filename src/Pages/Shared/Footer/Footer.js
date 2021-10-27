import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import logo from '../../../images/logos/Group 1329.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img height="80px" width="200px" src={logo} alt="" />
                            <p>
                                Volunteer network is a online plateform where anyone can join and service for the people. It is open for everyone to serve any volunery work.
                            </p>
                            <p>
                                <i class="fas fa-map-marked-alt icon-color"></i> Dhanmondi 32,
                                Dhaka, Bangladesh
                            </p>
                            <p>
                                <i class="fas fa-phone-alt icon-color"></i> +8801112233334
                            </p>
                            <p>
                                <i class="far fa-envelope-open icon-color"></i>{" "}
                                volunteernetwork@gmail.com
                            </p>
                            <div className="d-flex align-items-center icon-color ms-5">
                                <i className="fab fa-facebook-f me-3"></i>
                                <i className="fab fa-twitte me-3r"></i>
                                <i className="fab fa-linkedin-in me-3"></i>
                                <i className="fab fa-instagram me-3"></i>
                                <i className="fab fa-github-alt me-3"></i>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="mt-5">Our Work</h3>
                            <p>To Help People</p>
                            <p>Add volenteer</p>
                            <p>Work Withou money</p>
                            <p>Free for everyone</p>
                            <p>Grow bangladesh</p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="mt-5">Newsletter</h3>
                            <p>
                                If you have any query about our online platform plase let us
                                know about
                            </p>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="your message"
                                    aria-label="your message"
                                    aria-describedby="basic-addon2"
                                />
                                <Button className='btn btn-secondary' id="basic-addon2">
                                    Text Us
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid copyright'>
                <div className="row">
                    <div className="col-md-12">
                        <p className='text-center mt-4'>Copyrights © 2022 by online clinic bd. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;