import "../style/css/Contentarea.css";
import About from "./About";
import Certifications from "./Certifications";
import Experience from "./Experience";
import Extraurricular from "./Extracurricular";
import Internship from "./Internship";
import Intro from "./Intro";
import ProfilePic from "./ProfilePic";
import Projects from "./Projects";
import Publications from "./Publications";
import Qualification from "./Qualification";
import Skills from "./Skills";
import Training from "./Training";
import Webinars from "./Webinars";
import Workshops from "./Workshops";
const Contentarea = () => {
	return (
		<div id="content-container">
			<div id="left-wrap">
				<About />
				<Intro />
				<Qualification />
				<Skills />
				<Extraurricular />
				<Certifications />
			</div>
			<div id="right-wrap">
				<ProfilePic />
				<Internship />
				<Projects />
				<Publications />
				<Webinars />
				<Workshops />
			</div>
		</div>
	);
};

export default Contentarea;
