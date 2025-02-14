import DesertList from "../DesertCard/DesertList";
// import VanillaSection from "../VanillaBean/VanillaSection";
// import WaffleSection from "../Waffle/WaffleSection";
// import desertData from "../data.json";

function DesertsPage() {
  return (
    <>
      <div className="container">
        <div className="content-wrapper">
          {/* <WaffleSection data={desertData} />
          <VanillaSection data={desertData} /> */}

          <DesertList />
        </div>
      </div>
    </>
  );
}

export default DesertsPage;
