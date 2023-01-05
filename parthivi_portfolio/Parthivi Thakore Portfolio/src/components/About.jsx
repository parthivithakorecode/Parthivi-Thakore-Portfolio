import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../style/css/About.css";
const About = () => {
	return (
		<div id="about-container" className="section">
			<h2 id="greeting-label">Hi, I am</h2>
			<h1 id="name-label">Parthivi Thakore</h1>
			<p id="designation-label">
				Student of <span>Cyber Security</span>, Dept. of Advanced Computing
			</p>
			<a href="https://poornima.org" target="_blank" rel="noopener noreferrer">
				<p id="college-label">
					<FontAwesomeIcon id="map-icon" icon={faLocationDot} />
					Poornima College of Engineering, Jaipur
				</p>
			</a>
			<div id="social-link-container">
				<a
					href="https://www.linkedin.com/in/parthivi-thakore-12345p678"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p>
						<FontAwesomeIcon icon={faLinkedin} /> LinkedIn Profile
					</p>
				</a>
				<a
					href="mailto:2021pcecyparthivi044@poornima.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p>
						<FontAwesomeIcon icon={faEnvelope} />
						parthivithakore@poornima.org
					</p>
				</a>
			</div>
		</div>
	);
};

export default About;
