import "./JuniorFrontendDeveloper.css";
import accountImage from "../assets/images/account.svg";

function JuniorFrontendDeveloper() {
  return (
    <div className="job-card">
      <div className="information-wrapper">
        <div className="image-wrapper">
          <img src={accountImage} alt="" />
        </div>
        <div className="description-wrapper">
          <div className="title">
            <p>Account</p>
            <span>NEW!</span>
          </div>
          <div className="specialist">
            <p>Junior Frontend Developer</p>
          </div>
          <div className="location-description">
            <p>2d ago</p>
            <p>Part time</p>
            <p>USA only</p>
          </div>
        </div>

        <div className="smallcards-wrapper">
          <span>Frontend</span>
          <span>Junior</span>
          <span>React</span>
          <span>Sass</span>
          <span>JavaScript</span>
        </div>
      </div>
    </div>
  );
}

export default JuniorFrontendDeveloper;
