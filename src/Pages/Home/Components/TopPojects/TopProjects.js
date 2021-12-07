import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopProjects.css'
const TopProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const filteredProjects = projects.filter(project => project.id <= 4)
    return (
        <div className="py-5  bg-dark top-project-style">
            <div className="container">
                <h1 className="py-5 my-5 fw-bold text-warning">Top Projects</h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        filteredProjects.map(fProject => {
                            const { picture, title, live, description, _id, technology } = fProject;
                            return (<Col key={_id}>
                                <Card className="card card-style mx-auto">
                                    <div className="img-container">
                                        <Card.Img variant="top" src={picture} className='image' />
                                    </div>
                                    <Card.Body >
                                        <div className="text-start ">
                                            <h4 className="fw-bold">{title}</h4>

                                            <h6> {description} </h6>
                                            <p> <span className="fw-bold">Technology:</span> <br />{technology} </p>
                                        </div>
                                        <div>

                                            <button className="btn btn-outline-success mx-1">
                                                <a className="text-bold link-style " target="_ blank" href={live}>Preview</a>
                                            </button>
                                            <Link to={`/projectdetails/${_id}`}>
                                                <button className="btn btn-success mx-1">Details</button>
                                            </Link>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        })
                    }
                </Row>
                <div className="pt-5">
                    <Link to="/projects">
                        <Button className="m-1">More Projects</Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default TopProjects;