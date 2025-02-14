import "./FullStackEngineer.css";
import eyecamImage from "../assets/images/eyecam-co.svg";

function FullStackEngineer() {
  return (
    <div className="job-card">
      <div className="information-wrapper">
        <div className="image-wrapper">
          <img src={eyecamImage} alt="" />
        </div>
        <div className="description-wrapper">
          <div className="title">
            <p>Eyecam Co.</p>
          </div>
          <div className="specialist">
            <p>Full Stack Engineer</p>
          </div>
          <div className="location-description">
            <p>3w ago</p>
            <p>Full time</p>
            <p>Worlwide</p>
          </div>
        </div>

        <div className="smallcards-wrapper">
          <span>Fullstack</span>
          <span>Midweight</span>
          <span>JavaScript</span>
          <span>Django</span>
          <span>Python</span>
        </div>
      </div>
    </div>
  );
}

export default FullStackEngineer;
