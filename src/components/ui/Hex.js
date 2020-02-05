import React from "react";

import "../../styles/hex.css";

export default function Hex(props) {
  return (
    <div className="hexagon">
      <span className="title-off">Hit dice</span>
      <span className="score-small">{props.data}</span>
    </div>
  );
}
