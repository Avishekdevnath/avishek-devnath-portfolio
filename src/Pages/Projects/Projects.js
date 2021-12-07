import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css'
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className="py-5  project-style">
            <Container>
                <h2 className="text-white">My projects</h2>
                <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                    {
                        projects.map(project => {
                            const { picture, title, live, description, id, technology } = project;
                            return (<Col key={id}>
                                <Card className="card card-style">
                                    <div className="img-container">
                                        <Card.Img variant="top" src={picture} className='image' />
                                    </div>
                                    <Card.Body >
                                        <div className="text-start card-body-style">
                                            <h4 className="fw-bold">{title}</h4>

                                            <h6> {description} </h6>
                                            <p> <span className="fw-bold">Technology:</span> <br />{technology} </p>
                                        </div>
                                        <div>

                                            <button className="btn  btn btn-outline-success mx-1">
                                                <a className="text-bold link-style " target="_ blank" href={live}>Preview</a>
                                            </button>
                                            <Link to="/projectdetails/:projectID">
                                                <button className="btn btn-success mx-1">Details</button>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
