import { Button, TextField } from "@mui/material";
import { blueGrey, deepPurple, indigo, red } from "@mui/material/colors";
import { useState } from "react";

const Counter: React.FC = () => {
  const [num, setNum] = useState(5);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState<{ score: number; color: string }[]>([]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const deleteScoreHandler = (index: number) => {
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
      <Button
        color="secondary"
        variant="contained"
        onClick={plus1Handler}
        disabled={num > 9}
      >
        +1
      </Button>

      <Button
        color="secondary"
        variant="contained"
        onClick={minus1Handler}
        disabled={num < 2}
      >
        -1
      </Button>
      <Button
        sx={{ backgroundColor: indigo[500], color: indigo[200] }}
        variant="outlined"
        onClick={resetHandler}
      >
        Reset
      </Button>
      <Button
        sx={{ backgroundColor: deepPurple[900] }}
        variant="contained"
        onClick={plus2Handler}
        disabled={num > 9 || num === 9}
      >
        +2
      </Button>
      <Button
        sx={{ backgroundColor: deepPurple[900] }}
        variant="contained"
        onClick={minus2Handler}
        disabled={num < 2 || num === 1}
      >
        -2
      </Button>

      <Button
        sx={{ backgroundColor: blueGrey[600], color: blueGrey[50] }}
        variant="outlined"
        onClick={saveNumberHandler}
      >
        Įrašyti balą
      </Button>
      <div>
        <TextField
          id="outlined-basic"
          label="Įveskite skaičių"
          variant="outlined"
          type="text"
          value={inputValue}
          onChange={handleInputValue}
        />
        <Button
          sx={{ backgroundColor: deepPurple[400] }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>

      <h4>Balai:</h4>
      <ul>
        {score.map((scor, index) => (
          <li key={index} style={{ color: scor.color }}>
            {scor.score}{" "}
            <Button
              sx={{ backgroundColor: red[500] }}
              variant="contained"
              onClick={() => deleteScoreHandler(index)}
            >
              Pašalinti
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Counter;
