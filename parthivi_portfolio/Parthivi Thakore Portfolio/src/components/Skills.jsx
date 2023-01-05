import "../style/css/Skills.css";
const Skills = () => {
	return (
		<div id="skills-container" className="section">
			<h2 className="section-heading">
				<span>#</span>Skills
			</h2>

			<div className="skills-wrapper section-detail-container">
				<div className="subsection">
					<p className="subsection-heading">Technical</p>
					<p className="subsection-point">
						<span>◍</span>C, C++, Python, DSA, Flutter, Kotlin, Android App
						Development, Big Data, AI, ML, DL, Cloud Practitioner
					</p>
					{/* <p className="subsection-point">
						<span>◍</span>Python, DSA
					</p>
					<p className="subsection-point">
						<span>◍</span>Flutter, Android Dev.
					</p>
					<p className="subsection-point">
						<span>◍</span>Big Data, AI, ML, DL, Cloud
					</p> */}
				</div>
				<div className="subsection">
					<p className="subsection-heading">Non-Technical</p>
					<p className="subsection-point">
						<span>◍</span>Public Speaking, Problem Solver, Leadership, Time
						Management, Active learner, Networking, Singing, Dancing
					</p>
					{/* <p className="subsection-point">
						<span>◍</span>Problem Solver
					</p>
					<p className="subsection-point">
						<span>◍</span>Leadership
					</p>
					<p className="subsection-point">
						<span>◍</span>Time Management
					</p>
					<p className="subsection-point">
						<span>◍</span>Active Learner
					</p>
					<p className="subsection-point">
						<span>◍</span>Networking
					</p>
					<p className="subsection-point">
						<span>◍</span>Singing and Dancing
					</p> */}
				</div>
				<div className="subsection">
					<p className="subsection-heading">Languages</p>
					<p className="subsection-point">
						<span>◍</span>English
					</p>
					<p className="subsection-point">
						<span>◍</span>Hindi
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
