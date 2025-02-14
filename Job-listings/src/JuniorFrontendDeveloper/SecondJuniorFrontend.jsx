import "./SecondJuniorFrontend.css";
import myhomeImage from "../assets/images/myhome.svg";

function SecondJuniorFrontend() {
  return (
    <div className="job-card">
      <div className="information-wrapper">
        <div className="image-wrapper">
          <img src={myhomeImage} alt="" />
        </div>
        <div className="description-wrapper">
          <div className="title">
            <p>MyHome</p>
          </div>
          <div className="specialist">
            <p>Junior Frontend Developer</p>
          </div>
          <div className="location-description">
            <p>5d ago</p>
            <p>Contract</p>
            <p>USA only</p>
          </div>
        </div>

        <div className="smallcards-wrapper">
          <span>Frontend</span>
          <span>Junior</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
      </div>
    </div>
  );
}

export default SecondJuniorFrontend;
