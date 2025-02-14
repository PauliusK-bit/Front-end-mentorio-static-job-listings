import WaffleItem from "./WaffleItem";

function WaffleSection(props) {
  const { data } = props;

  const waffles = data.filter((desert) => desert.category === "Waffle");

  return (
    <section className="waffle-section">
      {waffles.map((desert, index) => (
        <WaffleItem key={index} data={desert} />
      ))}
    </section>
  );
}

export default WaffleSection;
