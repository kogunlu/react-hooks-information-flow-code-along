import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ parentColor, setParentColor, childColor, setChildColor }) {

  function handleClick(){
    setParentColor(getRandomColor)
    setChildColor(getRandomColor)
  }


  return <div className="child" style={{ backgroundColor: childColor }} onClick = {() => handleClick()} />;
}

export default Child;
