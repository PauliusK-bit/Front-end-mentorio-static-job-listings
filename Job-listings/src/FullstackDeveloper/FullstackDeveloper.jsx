import "./FullstackDeveloper.css";
import managePhoto from "../assets/images/manage.svg";

function FullstackDeveloper() {
  return (
    <>
      <div className="job-card">
        <div className="information-wrapper">
          <div className="image-wrapper">
            <img src={managePhoto} alt="" />
          </div>
          <div className="description-wrapper">
            <div className="title">
              <p>Manage</p>
              <span>NEW!</span>
              <span>FEATURED</span>
            </div>
            <div className="specialist">
              <p>Fullstack Developer</p>
            </div>
            <div className="location-description">
              <p>1d ago</p>
              <p>Part time</p>
              <p>Remote</p>
            </div>
          </div>

          <div className="smallcards-wrapper">
            <span>Fullstack</span>
            <span>Midweuight</span>
            <span>Python</span>
            <span>React</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullstackDeveloper;
