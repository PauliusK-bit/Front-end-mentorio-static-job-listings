import { useEffect, useState } from "react";
import "./CatFact.css";

function CatFact() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    const fetchFact = async () => {
      const res = await fetch("https://catfact.ninja/fact");
      const fact = await res.json();
      console.log(fact);
      setFact(fact.fact);
    };

    fetchFact();
  }, []);

  const factHandler = async () => {
    const res = await fetch("https://catfact.ninja/fact");
    const fact = await res.json();

    setFact(fact.fact);
  };

  return (
    <>
      <div className="cat-fact-container">
        <button onClick={factHandler}>Get A Fact About Cat</button>
        <p>{fact}</p>
      </div>
    </>
  );
}

export default CatFact;
