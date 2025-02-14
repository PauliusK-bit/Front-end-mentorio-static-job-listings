import CardItem from "../JobCard/CardItem";
import "./FrontEndDev.css";
import jobData from "../data.json";

function FrontEndDev() {
  const job = jobData.find((job) => job.id === 10);

  return <CardItem jobData={job} />;
}

export default FrontEndDev;
