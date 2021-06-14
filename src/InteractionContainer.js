import React, { useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";

const circleRadius = 30;

const InteractionContainer = () => {
  const { height, width } = useWindowDimensions();
  const [circleX, setCircleX] = useState(width / 2);
  const [circleY, setCircleY] = useState(height / 2);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCircleX(clientX);
    setCircleY(clientY);
  };

  return (
    <svg height={height} width={width} onMouseMove={handleMouseMove}>
      <circle cx={circleX} cy={circleY} r={circleRadius} />
    </svg>
  );
};

export default InteractionContainer;
