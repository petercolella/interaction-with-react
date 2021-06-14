import React, { useState } from "react";

const height = 500;
const width = 960;
const circleRadius = 30;

const InteractionContainer = () => {
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
