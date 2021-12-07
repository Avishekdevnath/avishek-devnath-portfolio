import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ProjectDetails.css'


const ProjectDetails = () => {

    const { projectID } = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${projectID}`)
            .then(res => res.json())
            .then(data => setProject(data))

    }, [projectID])

    console.log(project, projectID);


    const {  picture, title, live, client, server, description, longDescription, technology } = project;


    return (
        <div className="py-5 project-details-style">
            <Container>
                <h1 className="py-5 text-white"> Project Details</h1>

                <Row>
                    <Col>
                        <div className="py-5  ">
                            <Image className="" src={picture} fluid />
                        </div>
                    </Col>

                    <Col>
                        <div className="bg-white py-5 px-3">
                            <h4 className="text-black">{title}</h4>
                            <h4 className="text-white d-flex justify-content-center align-items-center">
                                <button className="btn  btn btn-outline-success mx-1">
                                    <a className="text-bold link-style text-white" target="_ blank" href={live}>Preview</a>
                                </button>
                                <button className="btn  btn btn-outline-success mx-1">
                                    <a className="text-bold link-style text-white" target="_ blank" href={client}>Client Code</a>
                                </button>
                                <button className="btn  btn btn-outline-success mx-1">
                                    <a className="text-bold link-style text-white" target="_ blank" href={server}>Server Code</a>
                                </button>
                            </h4>

                            <h5 className="text-start fw-normal">
                                {description}
                            </h5>
                            <div className="text-start">
                                <span className="fw-bold h5">Features:</span> <br />
                                <span className="fw-normal h6">
                                    {longDescription}
                                </span>
                            </div>
                            <div className="text-start">
                                <span className="fw-bold h5">Technology:</span> <br />
                                <span className="fw-normal h6">
                                    {technology}
                                </span>
                            </div>

                            {/* 
                            {project[1]?.map(src => 
                            <Container>
                                <img src={src} style={{ maxHeight: '80vh' }} alt="" />
                            </Container>)} */}
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default ProjectDetails;