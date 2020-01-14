import React from "react";
import "../../styles/shield.css";

export default function Shield(props) {
  return (
    <div id="parent-shield">
      <div id="shield">
        <span className="title">AC</span>
        <span className="score">{props.data}</span>
      </div>
    </div>
  );
}
