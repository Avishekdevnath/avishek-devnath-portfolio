import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark pt-5 m-0 pb-1">
            <Container>
                <footer>
                    <Row xs={1} md={4} className="g-4">
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Top Projects</h4>
                            <div>
                                <p className="m-0 pt-1">Bike Website</p>
                                <p className="m-0 pt-1">Tourist Website</p>
                                <p className="m-0 pt-1">Healthcare Website</p>

                            </div>
                        </Col>
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Quick Links</h4>
                            <div>
                                <p className="m-0 pt-1">Home</p>
                                <p className="m-0 pt-1">Projects</p>
                                <p className="m-0 pt-1">About Me</p>
                                <p className="m-0 pt-1">Contact Me</p>
                            </div>
                        </Col>
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Social Media</h4>
                            <div>
                                <p className="m-0 pt-1">Github</p>
                                <p className="m-0 pt-1">Linked in</p>
                            </div>
                        </Col>
                        <Col className="text-white text-start">
                            <h4 className="pb-3 m-logo" >Avishek</h4>
                            <div>
                                <p className="m-0 pt-1">Lichubagan, Chandraghona, Rangunia<br />Chittagong, Bangladesh.</p>
                                <p className="m-0 pt-1">+8801874819713</p>
                                <p className="m-0 pt-1">avishekdevnath@gmail.com</p>
                            </div>
                        </Col>

                    </Row>

                    <h6 className="text-muted pt-5 pb-1">Copyright &copy; 2021 Avishek Devnath</h6>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;