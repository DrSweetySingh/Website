import React from "react";
import "../Styles/Physiotherapy.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhone} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from "react-router-dom"
import {HashLink as Link} from 'react-router-hash-link' 


const Physiotherapy = () => {
return (
	<BrowserRouter>
	<div id="Physiotherapy">
	<h1>Physiotherapy</h1>
		<div class="list" id="specs">
			<table class="table" responsive>
			<tr>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>PIVD</span>
				</td>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Disc Prolapse</span>
				</td>
				
			</tr>
			<tr>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Treatment For Orthopaedic Physiotherapy</span>
				</td>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Physiotherapy For Sports Injury Rehabilitation</span>
				</td>
				
			</tr>
			<tr>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Neck Pain Treatment</span>
				</td>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Sports Physiotherapy</span>
				</td>
				
			</tr>
			<tr>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Clinical Physiotherapy</span>
				</td>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Sports Massage Therapy</span>
				</td>
				
			</tr>
			<tr>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Orthopaedic Physiotherapy</span>
				</td>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Taping</span>
				</td>
				
			</tr>
			<tr>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Polio Treatment</span>
				</td>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Cryotherapy And cold Therapy</span>
				</td>
				
			</tr>
			<tr>
				<td>
				<FontAwesomeIcon icon={faCheck} /> 
				<span>Post Natal Fitness expert</span>
				</td>
			</tr>
		</table>
		</div>
	</div>
	</BrowserRouter>
);
};

export default Physiotherapy;