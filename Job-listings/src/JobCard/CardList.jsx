import data from "../data.json";
import CardItem from "./CardItem";

function CardList() {
  return (
    <>
      {data.map((job) => (
        <CardItem key={job.id} jobData={job} />
      ))}
    </>
  );
}

export default CardList;
