import React, { useState } from "react";
import styles from "./Block.module.css";

const Block = (props) => {
  const [clicked, setClicked] = useState(false);
  const [className, setClassName] = useState(styles.light)

  const click = ()=>{
    if(clicked == false){
      setClicked(true)
      setClassName(styles.dark)
    }else{
      setClicked(false)
      setClassName(styles.light)
    }
    
  }

  return (
    <div onClick={()=>{click()}} className={className}>
      ({props.x}, {props.y})
    </div>
  );
};

export default Block;
