import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import emailjs from "emailjs-com";
import './ContactMe.css';

// Code for contact page
const ContactMe = () => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="" />;
    const phone = <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="" />;
    const email = <FontAwesomeIcon icon={faEnvelope} size="2x" className="" />;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_x0gr6ph', 'template_azdl1zp', e.target, 'user_ipHIMZB9pDML4LhAreiIo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="  contact-style ">
            <Container>
                <div className="py-5">
                    <div className="pb-5 text-white">
                        <h2 className=" fw-bold text-warning">Contact Me</h2>
                        <h4 className="">Feel free to contact with me anytime.</h4>
                    </div>

                    <Row xs={1} md={3} className="mx-auto align-content-center justify-content-center">
                        <Col className="d-flex flex-column p-0 m-0">
                            <h4 className="text-center text-white ">Get in touch with us</h4>
                            <p className="text-start text-white  py-2">If you need any kind of projects, just leave a message. I usually respond within 2/3 hours. </p>
                            <Row xs={1} md={1} className="mx-auto align-content-center justify-content-center">
                                <Col className="d-flex justify-content-start">
                                    <div className="d-flex ms-0 align-items-center justify-content-center ">
                                        <div className="  me-3 mb-4">
                                            <i className="text-white ">{location}</i>
                                        </div>
                                        <div className="text-start  p-0 d-flex flex-column  my-1 text-white">
                                            <h5 className="m-0 pb-1">Address</h5>
                                            <div className="m-0 p-0"><p>Green Road, Dhaka,<br /> Bangladesh.</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-start">
                                    <div className="d-flex ms-0 align-items-center justify-content-center ">
                                        <div className="  me-3 mb-4">
                                            <i className="text-white ">{phone}</i>
                                        </div>
                                        <div className="text-start  p-0 d-flex flex-column  my-1 text-white">
                                            <h5 className="m-0 pb-1">Phone</h5>
                                            <div className="m-0 p-0"><p>+8801874819713</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-start">
                                    <div className="d-flex ms-0 align-items-center justify-content-center ">
                                        <div className="  me-3 mb-4">
                                            <i className="text-white ">{email}</i>
                                        </div>
                                        <div className="text-start  p-0 d-flex flex-column  my-1 text-white">
                                            <h5 className="m-0 pb-1">Email</h5>
                                            <div className="m-0 p-0"><p>avishdevnath@gmail.com</p></div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>


                        </Col>
                        <Col className="">
                            <div className="">

                                <form onSubmit={sendEmail}>
                                    <input type="text" name="name" placeholder="Your Name" className="mb-3 text-field input" />
                                    <input type="email" name="email" placeholder="Your Email" className="mb-3 text-field input" />
                                    <input type="text" name="subject" placeholder="Subject" className="mb-3 text-field input" />
                                    <textarea type="email" name="message" placeholder="Message" className="mb-3 text-field textarea" />
                                    <Button type="submit"

                                        className="send-btn btn btn-primary ">Send Message</Button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container >
        </div >
    );
};

export default ContactMe;