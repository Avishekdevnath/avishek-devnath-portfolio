import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const Project = () => {
    const { projectID } = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${projectID}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [projectID])
    return (
        <div>
            <Container>
                <ProjectDetails project={project}></ProjectDetails>
            </Container>
        </div>
    );
};

export default Project;