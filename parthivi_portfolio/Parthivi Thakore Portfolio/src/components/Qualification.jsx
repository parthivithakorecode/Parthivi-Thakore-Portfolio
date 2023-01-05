import "../style/css/Qualification.css";

const Qualification = () => {
	return (
		<div id="qualification-container" className="section">
			<h2 className="section-heading">
				<span>#</span>Qualifications
			</h2>
			<div id="qualifications-wrapper" className="section-detail-container">
				<div className="qualification">
					<div className="qualification-year">
						<p>Present</p>
					</div>
					<div className="qualification-detail">
						<p>
							Pursuing B-Tech. (Current CGPA = 8.70) in Computer Science with
							Cyber Security from Poornima Engineering College, Jaipur
							&#123;2021 - 2025&#125;
						</p>
					</div>
				</div>
				<a
					href="https://drive.google.com/file/d/1RM4SOHljtoSGyzRdfa8ZPJAC4_xf6i06/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="qualification">
						<div className="qualification-year">
							<p>2021</p>
						</div>
						<div className="qualification-detail">
							<p>
								Senior Secondary from Prince Senior Sec. Public School, Jaipur
								with 97.80% from RBSE board &#123;June, 2021&#125;
							</p>
						</div>
					</div>
				</a>
				<a
					href="https://drive.google.com/file/d/1S8Yb6UqyJUOVFGU2524h9gJ9iMwhxBLL/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="qualification">
						<div className="qualification-year">
							<p>2019</p>
						</div>
						<div className="qualification-detail">
							<p>
								Matriculation from Aims Academy, Jaipur with 89.33% &#123;March,
								2019&#125;
							</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Qualification;
