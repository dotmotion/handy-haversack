import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";

import StatBox from "../components/StatBox";
import Shield from "../components/ui/Shield";
import Hex from "../components/ui/Hex";

export default function Char() {
  const {
    character: { general }
  } = useContext(GlobalContext);

  const char = general;
  const {
    stats,
    skills,
    hp: { max, current, temp }
  } = char;
  const statList = Object.keys(stats);
  const skillList = Object.keys(skills);

  const _wis = Math.abs((stats.wisdom.value - 10) / 2);
  const _dex = Math.abs((stats.dexterity.value - 10) / 2);
  const pas_wis = skills.perception.prof ? 10 + _wis + char.prof : 10 + _wis;

  return (
    <>
      <header className="head">
        <div className="left">
          <span className="name">{char.name}</span>
          <span className="class small">{`(${char.race}) `}</span>
        </div>
        <div className="right">
          <span>{`L${char.level} ${char.class}`}</span>
          <span className="xp small">{` (XP: ${char.xp.toLocaleString()})`}</span>
        </div>
      </header>
      <section className="main-stats">
        <Shield data={char.ac} />
        <div className="hp">
          <div className="large-hp">
            <span className="small">HP</span>
            <InputBase
              className="hp-value"
              defaultValue={current + temp}
              inputProps={{ "aria-label": "naked" }}
            />
          </div>
          <div className="small-hp">
            <span className="small">{`MAX HP: `}</span>
            <span className="small2">{max}</span>
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
          <p>{`${_dex > 0 ? `+` : `-`}${_dex}`}</p>
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
        {statList.map(statName => {
          const stat = stats[statName];
          return (
            <StatBox
              key={stat.label}
              label={stat.label}
              value={stat.value}
              prof={stat.prof}
              misc={stat.misc}
              add={char.prof}
            />
          );
        })}
      </section>
      <Divider variant="middle" className="class-div" />
      <span className="label">Skills</span>
      <section className="skills">
        {skillList.map(skillName => {
          const skill = skills[skillName];
          const { label, score, prof, exp } = skill;
          const stat = stats[score.toLowerCase()];
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
