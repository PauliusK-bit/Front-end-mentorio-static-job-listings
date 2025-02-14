import "./BackendJuniorDeveloper.css";

import jobData from "../data.json";
import CardItem from "../JobCard/CardItem";

function BackendJuniorDeveloper() {
  const job = jobData.find((job) => job.id === 5);

  return <CardItem jobData={job} />;
}

export default BackendJuniorDeveloper;
