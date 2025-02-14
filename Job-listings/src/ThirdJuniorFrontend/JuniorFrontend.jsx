import "./JuniorFrontend.css";
import insureImage from "../assets/images/insure.svg";

function JuniorFrontend() {
  return (
    <div className="job-card">
      <div className="information-wrapper">
        <div className="image-wrapper">
          <img src={insureImage} alt="" />
        </div>
        <div className="description-wrapper">
          <div className="title">
            <p>Insure</p>
          </div>
          <div className="specialist">
            <p>Junior Frontend Developer</p>
          </div>
          <div className="location-description">
            <p>2w ago</p>
            <p>Full time</p>
            <p>USA only</p>
          </div>
        </div>

        <div className="smallcards-wrapper">
          <span>Frontend</span>
          <span>Junior</span>
          <span>Vue</span>
          <span>Javascript</span>
          <span>Sass</span>
        </div>
      </div>
    </div>
  );
}

export default JuniorFrontend;
