import DesertCard from "./DesertCard";
import data from "../data.json";
function DesertList() {
  return (
    <>
      {data.map((desert, index) => (
        <DesertCard key={index} data={desert} />
      ))}
    </>
  );
}

export default DesertList;
