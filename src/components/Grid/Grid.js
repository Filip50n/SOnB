import React, { useEffect, useState } from "react";
import Block from "./Block/Block";
import styles from "./Grid.module.css";

const Grid = ({
  firstValue,
  setFirstValue,
  secondValue,
  setSecondValue,
  errorInjected,
  setRefresh,
}) => {
  const [firstResult, setFirstResult] = useState(true);
  const [secondResult, setSecondResult] = useState(true);
  const [thirdResult, setThirdResult] = useState(true);
  const [finalResult, setFinalResult] = useState(true);

  return (
    <div className={styles.container}>
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
  );
};

export default Grid;
