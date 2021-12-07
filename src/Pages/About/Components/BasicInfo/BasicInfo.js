import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './BasicInfo.css'


const BasicInfo = () => {
    const github = <FontAwesomeIcon icon={faGithub} size="2x" className="" />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" className="" />;
    const twitter = <FontAwesomeIcon icon={faTwitter} size="2x" className="" />;

    return (
        <div className="basic-style bg-dark">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="py-5 mt-5 ">
                            <Image className="p-5" src=" https://i.ibb.co/rm2v8VL/Linked-In-Profile.png" roundedCircle />
                        </div>

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="py-3">
                            <h3 className="text-white">
                                Hi, I am <span className="m-logo">
                                    Avishek Devnath</span>
                            </h3>

                            <h1 className="text-warning">
                                <Typewriter
                                    words={['Web Developer', 'Reactjs Developer', 'Front-End Developer', 'Back-End Developer', 'Web Designer', 'Graphics Designer', 'Problem Solver']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <h4 className="py-1 text-white  fw-normal">
                                Hi, I'm Avishek Devnath. I'm a CSE student. I have learned the basics of MERN Stack Development. And I'm currently seeking an internship or junior full-stack web developer job. I'm a quick learner and I love to learn and apply new things. I always enjoy teamwork.
                            </h4>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="py-3 d-flex justify-content-center ">

                            <div className="d-flex justify-content-center   w-50">
                                <div className="i-Social m-1">
                                    <a className="i-Social-style" target="_blank" rel="noopener noreferrer" href="https://github.com/Avishekdevnath">{github}</a>
                                </div>
                                <div className="i-Social m-1">
                                    <a className="i-Social-style" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/avishek-devnath/">{linkedin}</a>
                                </div>
                                <div className="i-Social m-1">
                                    <a className="i-Social-style" target="_blank" rel="noopener noreferrer" href="https://twitter.com/avishek_devnath">{twitter}</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="py-3 d-flex justify-content-center ">

                            <div className="d-flex justify-content-center   w-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1rx4XxYfGX-DA7LG0kQR9nI5g8aXvR9x5/view">
                                    <Button variant="outline-primary" className="m-1">Resume</Button>
                                </a>
                                <Button className="m-1">Contact Me</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default BasicInfo;