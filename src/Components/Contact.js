import React from "react";
import "../Styles/Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import Img from './images/selfie2.jpg'
const Contact = () => {
return (
	<div id="Contact">
	<Container fluid>
		<h1> Contact </h1>
		<Row>
			<Col xs={5} md={3}>
				<Image  src={Img} roundedCircle fluid thumbnail/>
			</Col>
			<Col xs={6} md={6}>
				<br />
				<br />
				<h3><FontAwesomeIcon icon={faWhatsapp} /> +91 6206127109 </h3>
				<br />
				<h3><FontAwesomeIcon icon={faPhone} /> +91 6206127109</h3>
				<br />
				<h3><FontAwesomeIcon icon={faLocationDot} /> Moradabad, UP </h3>
				<div className="singleCol social-media-icons-black d-flex justify-content-center">
				<a href= "https://www.facebook.com/drsweety.singh.1">
					<FontAwesomeIcon icon={faFacebook} />
				</a>
				<a href= "https://www.instagram.com/singhdr.sweety/?hl=en">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
		</div>
			</Col>
      	</Row>
	  
	</Container>
	</div>
);
};

export default Contact;