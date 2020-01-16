import React from "react";

import Shield from "../components/ui/Shield";
import Hex from "../components/ui/Hex";

const char = {
  level: 4,
  xp: 3900,
  class: "Rogue",
  race: "Gnoll",
  ac: 15,
  hit: "1d8",
  maxHp: 35,
  hp: 35,
  tempHp: 0
};

export default function Char() {
  return (
    <div className="container">
      <header className="head">
        <div className="left">
          <span className="name">Toryc</span>
          <span className="class small">{char.race}</span>
        </div>
        <div className="right">
          <span>{`Level ${char.level} ${char.class}`}</span>
          <span className="xp small">XP: {char.xp.toLocaleString()}</span>
        </div>
      </header>
      <section className="main-stats">
        <Shield data={char.ac} />
        <div className="hp">
          <div className="large-hp">
            <span className="small">HP</span>
            <span className="score">{char.hp + char.tempHp}</span>
          </div>
          <div className="small-hp">
            <span className="small">{`MAX HP: `}</span>
            <span className="small2">{char.maxHp}</span>
          </div>
        </div>
        <Hex data={char.hit} />
      </section>
      <section className="mid-stats">
        {/* speed
        initiative
        proficiency */}
      </section>
      <section className="ability-scores">
        {/* str
        int
        wis
        cha */}
      </section>
    </div>
  );
}
