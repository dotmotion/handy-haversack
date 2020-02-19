import React from "react";

import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";

import StatBox from "../components/StatBox";
import Shield from "../components/ui/Shield";
import Hex from "../components/ui/Hex";

export default function Char(props) {
  const { char } = props;
  const { stats, skills } = char;

  const temp = stats.find(element => element.label === "Wisdom");
  const temp2 = stats.find(element => element.label === "Dexterity");
  const per = skills.find(element => element.label === "Perception");

  const w_value = Math.abs((temp.value - 10) / 2);
  const d_value = Math.abs((temp2.value - 10) / 2);
  const pas_wis = per.prof ? 10 + w_value + char.prof : 10 + w_value;

  return (
    <>
      <header className="head">
        <div className="left">
          <span className="name">Toryc</span>
          <span className="class small">{`(${char.race})`}</span>
        </div>
        <div className="right">
          <span>{`L${char.level} ${char.class}`}</span>
          <span className="xp small">{` (XP: ${char.xp.toLocaleString()})`}</span>
        </div>
      </header>
      <section className="main-stats">
        <Shield data={char["armor-class"]} />
        <div className="hp">
          <div className="large-hp">
            <span className="small">HP</span>
            <InputBase
              className="hp-value"
              defaultValue={char.hp + char.temphp}
              inputProps={{ "aria-label": "naked" }}
            />
          </div>
          <div className="small-hp">
            <span className="small">{`MAX HP: `}</span>
            <span className="small2">{char.maxhp}</span>
          </div>
        </div>
        <Hex data={char.hit} />
      </section>
      <div className="spaced-row">
        <div className="stat-float">
          <span>Speed</span>
          <p>{char.speed}</p>
        </div>
        <div className="stat-float">
          <span>Initiative</span>
          <p>{`${d_value > 0 ? `+` : `-`}${d_value}`}</p>
        </div>
        <div className="stat-float">
          <span>Proficiency</span>
          <p>{`+${char.prof}`}</p>
        </div>
        <div className="stat-float">
          <span>Passive Wis</span>
          <p>{pas_wis}</p>
        </div>
      </div>
      <Divider variant="middle" className="class-div" />
      <section className="mid-stats">
        {stats.map(stat => (
          <StatBox
            key={stat.label}
            label={stat.label}
            value={stat.value}
            prof={stat.prof}
            misc={stat.misc}
            add={char.prof}
          />
        ))}
      </section>
      <Divider variant="middle" className="class-div" />
      <span className="label">Skills</span>
      <section className="skills">
        {skills.map(skill => {
          const { label, score, prof, exp } = skill;
          const stat = stats.find(element => element.label === score);
          const proficiency = char.prof;
          let value = Math.abs((stat.value - 10) / 2);

          if (exp) {
            value = value + proficiency * 2;
          } else if (prof) {
            value = value + proficiency;
          }

          const sign = value > 0 ? "+" : "-";
          return (
            <div className="skill-box" key={skill.label}>
              <span style={{ fontSize: 12 }}>{label}</span>
              <span
                style={{ color: "#fff", fontSize: 16 }}
              >{`${sign}${value}`}</span>
            </div>
          );
        })}
      </section>
    </>
  );
}
