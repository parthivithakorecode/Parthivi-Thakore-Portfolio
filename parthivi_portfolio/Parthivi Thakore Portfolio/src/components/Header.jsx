import "../style/css/Header.css";
import $ from "jquery";
import { Link } from "react-scroll";

const Header = () => {
	$(window).scroll(function (event) {
		let scroll = $(window).scrollTop();
		if (scroll > 10) {
			$("#top-button").css("display", "flex");
		} else {
			$("#top-button").hide();
		}
	});
	return (
		<div id="header">
			<div id="title-container">
				<h1>
					Portfolio <span>| Parthivi Thakore</span>
				</h1>
			</div>
			<div id="nav-container">
				<div id="nav-wrapper">
					<Link
						id="top-button"
						activeClass="nav-active"
						to="main-wrapper"
						smooth={true}
						duration={500}
					>
						<div className="nav">
							<p>Back to Top</p>
						</div>
					</Link>
					<Link
						activeClass="nav-active"
						to="intro-container"
						smooth={true}
						duration={500}
					>
						<div className="nav">
							<p>About</p>
						</div>
					</Link>
					<Link
						activeClass="nav-active"
						to="qualification-container"
						smooth={true}
						duration={500}
					>
						<div className="nav">
							<p>Qualification</p>
						</div>
					</Link>
					<Link
						activeClass="nav-active"
						to="experience-container"
						smooth={true}
						duration={500}
					>
						<div className="nav">
							<p>Exerience</p>
						</div>
					</Link>
					<Link
						activeClass="nav-active"
						to="skills-container"
						smooth={true}
						duration={500}
					>
						<div className="nav">
							<p>Skills</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
