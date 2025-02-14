import VanillaBean from "./VanillaBean";

function VanillaSection(props) {
  const { data } = props;

  const waffles = data.filter((desert) => desert.category === "Crème Brûlée");

  return (
    <section className="vanilla-section">
      {waffles.map((desert, index) => (
        <VanillaBean key={index} data={desert} />
      ))}
    </section>
  );
}

export default VanillaSection;
