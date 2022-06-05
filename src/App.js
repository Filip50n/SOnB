import { useEffect, useState } from "react";
import "./App.css";
import Block from "./components/Grid/Block/Block";

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  const [errorOne, setErrorOne] = useState(false);
  const [errorTwo, setErrorTwo] = useState(false);
  const [errorThree, setErrorThree] = useState(false);

  const [firstResult, setFirstResult] = useState(true);
  const [secondResult, setSecondResult] = useState(true);
  const [thirdResult, setThirdResult] = useState(true);
  const [finalResult, setFinalResult] = useState(true);

  useEffect(() => {
    const firstR = errorOne
      ? !(firstValue === secondValue)
      : firstValue === secondValue;
    const secondR = errorTwo
      ? !(firstValue === secondValue)
      : firstValue === secondValue;
    const thirdR = errorThree
      ? !(firstValue === secondValue)
      : firstValue === secondValue;

    const truths = [firstR, secondR, thirdR].filter((x) => x).length;
    const falses = [firstR, secondR, thirdR].filter((x) => !x).length;

    const finalR = truths > falses;

    setFirstResult(firstR);
    setSecondResult(secondR);
    setThirdResult(thirdR);
    setFinalResult(finalR);
  }, [firstValue, secondValue, errorOne, errorTwo, errorThree]);

  const setFirst = (e) => {
    e.preventDefault();
    setFirstValue(e.target.value);
    setShowResult(false);
  };
  const setSecond = (e) => {
    e.preventDefault();
    setSecondValue(e.target.value);
    setShowResult(false);
  };

  const changeError = (e, setError, error) => {
    e.preventDefault();
    setError(error);
  };

  return (
    <div className="App">
      {/* form */}
      <div className="form-container">
        <form className="form">
          <label htmlFor="first">Pierwsza wartość:</label>
          <input
            id="first"
            className="value"
            value={firstValue}
            onChange={(e) => setFirst(e)}
          />
          <label htmlFor="first">Druga wartość:</label>
          <input
            className="value"
            value={secondValue}
            onChange={(e) => setSecond(e)}
          />
          <div className="form-buttons">
            <button
              onClick={(e) => changeError(e, setErrorOne, !errorOne)}
              className="form-button"
            >
              {errorOne ? "Usuń błąd #1" : "Wstrzyknij błąd #1"}
            </button>
            <button
              onClick={(e) => changeError(e, setErrorTwo, !errorTwo)}
              className="form-button"
            >
              {errorTwo ? "Usuń błąd #2" : "Wstrzyknij błąd #2"}
            </button>
            <button
              onClick={(e) => changeError(e, setErrorThree, !errorThree)}
              className="form-button"
            >
              {errorThree ? "Usuń błąd #3" : "Wstrzyknij błąd #3"}
            </button>
          </div>
        </form>
      </div>

      {/* grid */}
      <div className="grid-container">
        {[...Array(100)].map((_, index) => (
          <Block
            x={parseInt(index / 10)}
            y={index % 10}
            firstResult={firstResult}
            secondResult={secondResult}
            thirdResult={thirdResult}
            finalResult={finalResult}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
