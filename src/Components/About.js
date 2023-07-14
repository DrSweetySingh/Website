import React from "react";
import "../Styles/About.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { faGraduationCap, faHeartPulse, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import CounterUpPage from "./CounterUpPage";
const About = () => {
return (
	<div id="aboutMe">
	<h1>About Me</h1>
    <br />
    <Container fluid>
        <Row>
        <Col xs={6} md={4}>
            <h2 id = 'grad'><FontAwesomeIcon icon={faGraduationCap} /></h2>
            <h3>MPT (orthopaedics) </h3>
        </Col>
        <Col xs={6} md={4}>
            <h2 id = 'grad'><FontAwesomeIcon icon={faHeartPulse}/></h2>
            <CounterUpPage />
            <h2>Patients</h2>
        </Col>
        <Col xs={6} md={4}>
            <h2 id = 'grad'><FontAwesomeIcon icon={faBriefcase}/></h2>
            <h3>
                <ul>
                    <li>20+ Years Experience</li>
                    <li>Lucknow Medical College</li>
                    <li>Apex Hospital Moradabad</li>
                </ul>
            </h3>
        </Col>
        </Row>
    </Container>
	</div>
);
};

export default About;