import React from "react";

import Shield from "../components/ui/Shield";
import Hex from "../components/ui/Hex";

const char = {
  ac: 15,
  hit: "1d8",
  maxHp: 35
};

export default function Char() {
  return (
    <div className="container">
      <header>Character Sheet</header>
      <section className="main-stats">
        <Shield data={char.ac} />
        <div className="hp">
          <span className="small">{`Max HP: ${char.maxHp}`}</span>
          {/* max HP
          current HP
          temp HP */}
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
