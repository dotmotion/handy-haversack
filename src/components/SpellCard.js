import React from "react";

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

export default function SpellCard(props) {
  const { spell, openModal } = props;
  const cast = spell.casting_time.includes("action")
    ? spell.casting_time.replace(/^[\s\d]+/, "")
    : spell.casting_time;

  return (
    <Paper
      elevation={5}
      className="list-paper"
      onClick={() => openModal(spell)}
    >
      <span className="card-title">{spell.name}</span>
      <Divider style={{ margin: 2 }} />
      <div className="card-deets">
        <div className="card-section">
          <span>Level</span>
          <span className="card-txt">{spell.level}</span>
        </div>
        <div className="card-section">
          <span>Range</span>
          <span className="card-txt">{spell.range}</span>
        </div>
        <div className="card-section">
          <span>Cast</span>
          <span className="card-txt">{cast}</span>
        </div>
        <div className="card-section">
          <span>Comp.</span>
          <span className="card-txt">{`${spell.components}`}</span>
        </div>
        <div className="card-section">
          <span>Duration</span>
          <span className="card-txt">{spell.duration}</span>
        </div>
        <div className="card-circles">
          {spell.ritual && (
            <div className="card-circle">
              <span>{`R`}</span>
            </div>
          )}
          {spell.concentration && (
            <div className="card-circle">
              <span>{`C`}</span>
            </div>
          )}
        </div>
      </div>
    </Paper>
  );
}
