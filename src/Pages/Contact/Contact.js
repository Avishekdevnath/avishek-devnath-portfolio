import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import emailjs from "emailjs-com";
import './Contact.css'


// Code for contact page
const Contact = () => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="" />;
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
        <div className=" contact">
            <Container>
                <div className="py-5">
                    <div className="pb-5 text-white">

                        <h2>Contact us</h2>
                        <h4>Feel free to contact with us anytime.</h4>
                    </div>
                    <Row xs={1} md={3} className="mx-auto g-4 align-content-center justify-content-center">
                        <Col className="">
                            <div>
                                <div className="i-contact mx-auto mb-3">{location}</div>
                                <div className="text-white">
                                    <h5 className="fw-bold">Adress</h5>
                                    <h6>Green Road, Dhaka,<br /> Bangladesh.</h6>
                                </div>

                            </div>
                        </Col>
                        <Col className="">
                            <div>
                                <div className="i-contact mx-auto mb-3">{phone}</div>
                                <div className="text-white">
                                    <h5 className="fw-bold">Phone</h5>
                                    <h6>+10 367 543 1234</h6>
                                </div>

                            </div>
                        </Col>
                        <Col className="">
                            <div>
                                <div className="i-contact mx-auto mb-3">{email}</div>
                                <div className="text-white">
                                    <h5 className="fw-bold">Email</h5>
                                    <h6>info @macademy.com</h6>
                                </div>

                            </div>
                        </Col>
                    </Row>



                    <div className="py-5">
                        <h2 className="pb-4 text-white">Get in touch with us</h2>
                        <form onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Your Name" className="mb-3 text-field input" />
                            <input type="email" name="email" placeholder="Your Email" className="mb-3 text-field input" />
                            <input type="text" name="subject" placeholder="Subject" className="mb-3 text-field input" />
                            <textarea type="email" name="message" placeholder="Message" className="mb-3 text-field textarea" />
                            <Button type="submit"

                                className="send-btn btn btn-primary ">Send Message</Button>
                        </form>

                    </div>
                </div >
            </Container >
        </div >
    );
};

export default Contact;