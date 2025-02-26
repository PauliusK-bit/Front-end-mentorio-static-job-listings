import DesertCard from "./DesertCard";
import data from "../data.json";
import React from "react";

type Desert = {
  id: number;
  name: string;
  description: string;
};

type DesertListProps = {
  data: Desert[];
};

const DesertList: React.FC<DesertListProps> = ({ data }) => {
  return (
    <>
      {data.map((desert, index) => (
        <DesertCard key={index} data={desert} />
      ))}
    </>
  );
};

export default DesertList;
