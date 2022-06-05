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
  const parse = () => {
    if (x == 2 && y == 1) {
      return (
        <div className={firstResult ? styles.true : styles.false}>first</div>
      );
    } else if (x == 4 && y == 1) {
      return (
        <div className={secondResult ? styles.true : styles.false}>second</div>
      );
    } else if (x == 6 && y == 1) {
      return (
        <div className={thirdResult ? styles.true : styles.false}>third</div>
      );
    } else if (x == 4 && y == 3) {
      return (
        <div className={finalResult ? styles.true : styles.false}>final</div>
      );
    } else {
      return "";
      // return `(${x}, ${y})`;
    }
  };

  return <div>{() => parse()}</div>;
};

export default Block;
