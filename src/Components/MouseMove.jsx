// src/components/MouseTracker.js

import React, { useState } from "react";
import "../Styles/MouseTracker.css"; // Create this CSS file for styling

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="mouse-tracker" onMouseMove={handleMouseMove}>
      <div className="follower gradient" style={{ left: position.x, top: position.y }} />
    </div>
  );
};

export default MouseTracker;
