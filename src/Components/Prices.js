import React from "react";
import "../Styles/Prices.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faRupee } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

const Physiotherapy = () => {
return (
    <Container fluid>
	<div id="Prices">
    <h5><b>Prices</b></h5>
        <div>
            <span><b>1. Online Consultation</b> - ₹500</span><br/>
            <span><b>2. Minimum 6 days Package</b> - ₹2400</span><br/>
            <span><b>3. Monthly Package</b> - ₹8500</span><br/>
        </div>
	</div>
    </Container>
);
};

export default Physiotherapy;