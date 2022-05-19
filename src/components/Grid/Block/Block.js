import React from "react";
import styles from "./Block.module.css";

const Block = (props) => {
  const className = (props.x + props.y) % 7 === 0 ? styles.dark : styles.light;

  return (
    <div className={className}>
      ({props.x}, {props.y})
    </div>
  );
};

export default Block;
