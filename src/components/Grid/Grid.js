import React from "react";
import Block from "./Block/Block";
import styles from "./Grid.module.css";

const Grid = () => {
  return (
    <div className={styles.container}>
      {[...Array(100)].map((_, index) => (
        <Block x={parseInt(index / 10)} y={index % 10} />
      ))}
    </div>
  );
};

export default Grid;
