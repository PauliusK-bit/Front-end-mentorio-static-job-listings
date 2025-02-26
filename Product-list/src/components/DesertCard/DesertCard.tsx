import React from "react";

type Desert = {
  id: number;
  name: string;
  description: string;
};

type DesertCardProps = {
  data: Desert;
};

const DesertCard: React.FC<DesertCardProps> = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default DesertCard;
