import "./JuniorDeveloper.css";
import shortlyImage from "../assets/images/shortly.svg";

function JuniorDeveloper() {
  return (
    <div className="job-card">
      <div className="information-wrapper">
        <div className="image-wrapper">
          <img src={shortlyImage} alt="" />
        </div>
        <div className="description-wrapper">
          <div className="title">
            <p>Shortly</p>
          </div>
          <div className="specialist">
            <p>Junior Developer</p>
          </div>
          <div className="location-description">
            <p>2w ago</p>
            <p>Full time</p>
            <p>WorldWide</p>
          </div>
        </div>

        <div className="smallcards-wrapper">
          <span>Frontend</span>
          <span>Junior</span>
          <span>HTML</span>
          <span>Sass</span>
          <span>JavaScript</span>
        </div>
      </div>
    </div>
  );
}

export default JuniorDeveloper;
