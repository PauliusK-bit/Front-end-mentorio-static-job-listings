import "./SoftwareEngineer.css";
import loopstudiosImage from "../assets/images/loop-studios.svg";

function SoftwareEngineer() {
  return (
    <div className="job-card">
      <div className="information-wrapper">
        <div className="image-wrapper">
          <img src={loopstudiosImage} alt="" />
        </div>
        <div className="description-wrapper">
          <div className="title">
            <p>Loop Studios</p>
          </div>
          <div className="specialist">
            <p>Software Engineer</p>
          </div>
          <div className="location-description">
            <p>1w ago</p>
            <p>Full time</p>
            <p>Worldwide</p>
          </div>
        </div>

        <div className="smallcards-wrapper">
          <span>Fullstack</span>
          <span>Midweight</span>
          <span>JavaScript</span>
          <span>Sass</span>
          <span>Ruby</span>
        </div>
      </div>
    </div>
  );
}

export default SoftwareEngineer;
