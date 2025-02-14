import seniorFrontendImage from "../assets/images/photosnap.svg";
import "./SeniorFrontend.css";

function SeniorFrontend() {
  return (
    <>
      <div className="job-card">
        <div className="information-wrapper">
          <div className="image-wrapper">
            <img src={seniorFrontendImage} alt="" />
          </div>
          <div className="description-wrapper">
            <div className="title">
              <p>Photosnap</p>
              <span>NEW!</span>
              <span>FEATURED</span>
            </div>
            <div className="specialist">
              <p>Senior Frontend Developer</p>
            </div>
            <div className="location-description">
              <p>1d ago</p>
              <p>Full time</p>
              <p>USA only</p>
            </div>
          </div>

          <div className="smallcards-wrapper">
            <span>Frontend</span>
            <span>Senior</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeniorFrontend;
