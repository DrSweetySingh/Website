import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/nav.css";
import {ReactComponent as logo} from "../logo.png"
import { BrowserRouter } from "react-router-dom"
import {HashLink as Link} from 'react-router-hash-link' 

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<BrowserRouter>
		<header>
      		{/* <logo /> */}
			<h3>Dr. Sweety Singh</h3>
			<nav ref={navRef}>
				<a><Link to = '#Physiotherapy' smooth>Physiotherapy</Link></a>
				<a><Link to = '#Yoga' smooth>Yoga</Link></a>
				<a><Link to = '#aboutMe' smooth>About Me</Link></a>
				<a><Link to = '#Prices' smooth>Prices</Link></a>
				<a><Link to = '#Contact' smooth>Contact</Link></a>

			<button className="nav-btn nav-close-btn" onClick={showNavbar}>
				<FaTimes />
			</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}> 
        <FaBars />
      </button>
    </header>
	</BrowserRouter>
    
	);
}

export default Navbar;