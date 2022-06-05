import React, { useEffect, useState } from "react";
import styles from "./Block.module.css";

const Block = ({
  x,
  y,
  firstResult,
  secondResult,
  thirdResult,
  finalResult,
}) => {
  useEffect(() => {
    parse();
  }, [firstResult, secondResult, thirdResult, firstResult]);

  const parse = () => {
    if (x == 2 && y == 3) {
      return (
        <div className={firstResult ? styles.true : styles.false}>first</div>
      );
    } else if (x == 4 && y == 3) {
      return (
        <div className={secondResult ? styles.true : styles.false}>second</div>
      );
    } else if (x == 6 && y == 3) {
      return (
        <div className={thirdResult ? styles.true : styles.false}>
          <p>third</p>
        </div>
      );
    } else if (x == 4 && y == 6) {
      return (
        <div className={finalResult ? styles.true : styles.false}>final</div>
      );
    } else {
      return <div></div>;
    }
  };

  return parse();
};

export default Block;
