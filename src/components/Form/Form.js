import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({
  firstValue,
  setFirstValue,
  secondValue,
  setSecondValue,
  showResult,
  setShowResult,
  errorInjected,
  setErrorInjected,
}) => {
  const compareValues = (e) => {
    e.preventDefault();
    setShowResult(true);
    console.log("i work!");
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

  const parseResult = () => {
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
    <div className={styles.container}>
      <form className={styles.form}>
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
        <div className={styles.buttons}>
          <button onClick={compareValues} className={styles.button}>
            Porównaj
          </button>
          <button onClick={reverseErrorInjection} className={styles.button}>
            {errorInjected ? "Usuń błąd" : "Wstrzyknij błąd"}
          </button>
        </div>
      </form>
      {showResult && <div>{parseResult()}</div>}
    </div>
  );
};

export default Form;
