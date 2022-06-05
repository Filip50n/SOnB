import { useEffect, useState } from "react";
import "./App.css";
import Block from "./components/Grid/Block/Block";

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [errorInjected, setErrorInjected] = useState(false);
  const [firstResult, setFirstResult] = useState(true);
  const [secondResult, setSecondResult] = useState(true);
  const [thirdResult, setThirdResult] = useState(true);
  const [finalResult, setFinalResult] = useState(true);

  // useEffect(() => {
  //   console.log(
  //     "Use effect has been called, new values: ",
  //     firstValue,
  //     secondValue
  //   );
  //   parseResult();
  // }, [firstValue, secondValue]);

  const parseResult = () => {
    console.log(
      "Parse result has been called by use effect, new values: ",
      firstValue,
      secondValue,
      "Expected results: ",
      firstValue === secondValue,
      errorInjected ? firstValue != secondValue : firstValue === secondValue,
      errorInjected ? firstValue != secondValue : firstValue === secondValue,
      "Actual results BEFORE: ",
      firstResult,
      secondResult,
      thirdResult
    );

    setFirstResult(firstValue === secondValue);
    setSecondResult(
      errorInjected
        ? firstValue != secondValue // comparing with two equal signs with error
        : firstValue === secondValue
    );
    setThirdResult(
      errorInjected
        ? firstValue != secondValue // comparing with two equal signs with error
        : firstValue === secondValue
    );

    const truths = [firstResult, secondResult, thirdResult].filter(
      (x) => x
    ).length;
    const falses = [firstResult, secondResult, thirdResult].filter(
      (x) => !x
    ).length;

    setFinalResult(truths > falses);
    console.log(
      "Actual results AFTER: ",
      firstResult,
      secondResult,
      thirdResult,
      "And final: ",
      finalResult
    );
  };

  const compareValues = (e) => {
    e.preventDefault();
    parseResult();
    // setShowResult(true);
    // console.log("i work!");
  };

  const reverseErrorInjection = (e) => {
    e.preventDefault();
    setErrorInjected(!errorInjected);
  };

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

  const parseAndPrint = () => {
    const firstResult = firstValue === secondValue;
    const secondResult = errorInjected
      ? firstValue != secondValue // comparing with two equal signs with error
      : firstValue === secondValue;
    const thirdResult = errorInjected
      ? firstValue != secondValue // comparing with two equal signs with error
      : firstValue === secondValue;

    const truths = [firstResult, secondResult, thirdResult].filter(
      (x) => x
    ).length;
    const falses = [firstResult, secondResult, thirdResult].filter(
      (x) => !x
    ).length;

    const finalResult = truths > falses;

    return `Wynik: ${finalResult}`;
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
            <button onClick={compareValues} className="form-button">
              Porównaj
            </button>
            <button onClick={reverseErrorInjection} className="form-button">
              {errorInjected ? "Usuń błąd" : "Wstrzyknij błąd"}
            </button>
          </div>
        </form>
        {/* {showResult && <div>{parseAndPrint()}</div>} */}
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

      {/* <Form
        firstValue={firstValue}
        setFirstValue={setFirstValue}
        secondValue={secondValue}
        setSecondValue={setSecondValue}
        showResult={showResult}
        setShowResult={setShowResult}
        errorInjected={errorInjected}
        setErrorInjected={setErrorInjected}
      /> */}
      {/* <Grid
        firstValue={firstValue}
        setFirstValue={setFirstValue}
        secondValue={secondValue}
        setSecondValue={setSecondValue}
        errorInjected={errorInjected}
        setRefresh={setRefresh}
      /> */}
    </div>
  );
}

export default App;
