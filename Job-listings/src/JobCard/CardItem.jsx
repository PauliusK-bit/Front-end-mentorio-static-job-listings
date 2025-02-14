/* eslint-disable react/prop-types */
import images from "../assets/images/images.js";
import "./CardItem.css";
import styles from "./CardList.module.css";
import logoStyle from "./Logo.module.css";
import toolStyle from "./Tools.module.css";
import positionStyle from "./Position.module.css";
import locationStyle from "./Location.module.css";

function CardItem({ jobData }) {
  const {
    company,
    logo,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools,
  } = jobData;

  const logoSrc = images[logo];

  return (
    <div className={styles.jobCard}>
      <div className="information-wrapper">
        <div className="image-wrapper">
          <img src={logoSrc} alt={company} />
        </div>

        <div className="description-wrapper">
          <div className="title">
            <p className={logoStyle.logo}>{company}</p>
          </div>
          <div className="specialist">
            <p className={positionStyle.position}>{position}</p>
          </div>
          <div className="location-description">
            <p className={locationStyle.location}>{postedAt}</p>
            <p className={locationStyle.location}>{contract}</p>
            <p className={locationStyle.location}>{location}</p>
          </div>
        </div>

        <div className="smallcards-wrapper">
          <span className={toolStyle.tool}>{role}</span>
          <span className={toolStyle.tool}>{level}</span>
          {languages.map((lang, index) => (
            <span className={toolStyle.tool} key={index}>
              {lang}
            </span>
          ))}
          {tools.map((tool, index) => (
            <span className={toolStyle.tool} key={index}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardItem;
