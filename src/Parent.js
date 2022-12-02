import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState('#fff')

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child parentColor = {color} setParentColor = {setColor} childColor = {childColor} setChildColor = {setChildColor} />
      <Child parentColor = {color} setParentColor = {setColor} childColor = {childColor} setChildColor = {setChildColor}  />
    </div>
  );
}

export default Parent;
