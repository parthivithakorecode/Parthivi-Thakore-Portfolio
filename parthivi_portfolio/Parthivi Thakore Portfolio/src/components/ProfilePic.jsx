import "../style/css/ProfilePic.css";
import Picture from "../img/parthivi.png";

const ProfilePic = () => {
	return (
		<div id="profile-pic-container" className="section">
			<img src={Picture} alt="Parthivi Thakore picture" />
		</div>
	);
};

export default ProfilePic;
