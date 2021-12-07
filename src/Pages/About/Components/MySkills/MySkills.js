import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import ProgressBar from "@ramonak/react-progress-bar";
import './MySkill.css'

const MySkills = () => {

    return (
        <div className="py-5 mySkill-style">
            <Container>
                <Row className=" mb-5 ">
                    <h1 className="text-white text-center fw-bold">My Skills</h1>
                    <div className="text-white">
                        <div className="text-white">
                            <Table responsive className="text-start table-style text-white">

                                <tbody className="py-3 table-style">
                                    <tr>
                                        <td>
                                            <h2 className="text-warning">Fronted</h2>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <h5>HTML5</h5>
                                        </td>
                                        <td className="">
                                            <ProgressBar
                                                className=" "
                                                completed={80}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#064635"}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>CSS3</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={75}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#064635"}

                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>JavaScript</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={70}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#064635"}
                                            />
                                        </td>
                                    </tr>

                                </tbody>
                                <tbody className="py-3 table-style">
                                    <tr>
                                        <td>
                                            <h2 className="text-warning">Back End</h2>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <h5>Node js</h5>
                                        </td>
                                        <td className="">
                                            <ProgressBar
                                                className=" "
                                                completed={60}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#91684A"}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Express js</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={60}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#91684A"}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>MongoDB</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={70}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#91684A"}
                                            />
                                        </td>
                                    </tr>

                                </tbody>
                                <tbody className="py-3 table-style">
                                    <tr>
                                        <td>
                                            <h2 className="text-warning">Frame Works</h2>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <h5>React</h5>
                                        </td>
                                        <td className="">
                                            <ProgressBar
                                                className=" "
                                                completed={60}
                                                maxCompleted={100}
                                                width={500}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Bootstrap</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={60}
                                                maxCompleted={100}
                                                width={500}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Tailwind</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={70}
                                                maxCompleted={100}
                                                width={500}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Material UI</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={70}
                                                maxCompleted={100}
                                                width={500}


                                            />
                                        </td>
                                    </tr>

                                </tbody>
                                <tbody className="py-3 table-style">
                                    <tr>
                                        <td>
                                            <h2 className="text-warning">Tools</h2>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <h5>Git</h5>
                                        </td>
                                        <td className="">
                                            <ProgressBar
                                                className=" "
                                                completed={60}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#0F2C67"}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Chrome Dev Tool</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={60}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#0F2C67"}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>VS Code</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={70}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#0F2C67"}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Firebase</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={70}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#0F2C67"}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>Heroku</h5>
                                        </td>
                                        <td>
                                            <ProgressBar
                                                className=" "
                                                completed={70}
                                                maxCompleted={100}
                                                width={500}
                                                bgColor={"#0F2C67"}
                                            />
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                        
                    </div>

                </Row>
            </Container>
        </div>
    );
};

export default MySkills;