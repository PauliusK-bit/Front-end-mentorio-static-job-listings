import { useState } from "react";

function Counter() {
  const [num, setNum] = useState(5);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const parsedNum = parseInt(inputValue, 10);

    setNum(parsedNum);
    setInputValue("");
  };

  const saveNumberHandler = () => {
    const newScore = num;
    setScore((prevScore) => [
      ...prevScore,
      { score: newScore, color: num > 4 ? "green" : "red" },
    ]);
  };

  const deleteScoreHandler = (index) => {
    setScore((prevScores) => prevScores.filter((_, i) => i !== index));
  };

  const plus1Handler = () => setNum((prevState) => prevState + 1);
  const minus1Handler = () => setNum((prevState) => prevState - 1);
  const resetHandler = () => setNum(5);
  const plus2Handler = () => setNum((prevState) => prevState + 2);
  const minus2Handler = () => setNum((prevState) => prevState - 2);

  const color = num > 4 ? "green" : "red";

  return (
    <>
      <h1 style={{ color }}>{num}</h1>
      <button onClick={plus1Handler} disabled={num > 9}>
        +1
      </button>
      <button onClick={minus1Handler} disabled={num < 2}>
        -1
      </button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={plus2Handler} disabled={num > 9 || num === 9}>
        +2
      </button>
      <button onClick={minus2Handler} disabled={num < 2 || num === 1}>
        -2
      </button>

      <button onClick={saveNumberHandler}>Įrašyti balą</button>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Įveskite skaičių"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <h4>Balai:</h4>
      <ul>
        {score.map((scor, index) => (
          <li key={index} style={{ color: scor.color }}>
            {scor.score}{" "}
            <button onClick={() => deleteScoreHandler(index)}>Pašalinti</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Counter;
