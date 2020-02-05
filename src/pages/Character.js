import React from "react";
import { toryc } from "../assets/toryc.js";

import Divider from "@material-ui/core/Divider";

import StatBox from "../components/StatBox";
import Shield from "../components/ui/Shield";
import Hex from "../components/ui/Hex";

const char = {
  level: 4,
  xp: 5450,
  prof: 2,
  class: "Rogue",
  race: "Gnoll",
  ac: 16,
  hit: "1d8",
  maxHp: 35,
  hp: 35,
  tempHp: 0,
  stats: [
    {
      label: "Strength",
      value: 14,
      prof: false,
      misc: 0
    },
    {
      label: "Dexterity",
      value: 18,
      prof: false,
      misc: 0
    },
    {
      label: "Constitution",
      value: 16,
      prof: false,
      misc: 0
    },
    {
      label: "Intelligence",
      value: 14,
      prof: false,
      misc: 0
    },
    {
      label: "Wisdom",
      value: 12,
      prof: false,
      misc: 0
    },
    {
      label: "Charisma",
      value: 14,
      prof: false,
      misc: 0
    }
  ],
  skills: [
    {
      label: "Acrobatics",
      score: "Dexterity",
      prof: true,
      exp: false
    },
    {
      label: "Animal Handling",
      score: "Wisdom",
      prof: false,
      exp: false
    },
    {
      label: "Arcana",
      score: "Intelligence",
      prof: false,
      exp: false
    },
    {
      label: "Athletics",
      score: "Strength",
      prof: false,
      exp: false
    },
    {
      label: "Deception",
      score: "Charisma",
      prof: true,
      exp: false
    },
    {
      label: "History",
      score: "Intelligence",
      prof: false,
      exp: false
    },
    {
      label: "Insight",
      score: "Wisdom",
      prof: false,
      exp: false
    },
    {
      label: "Intimidation",
      score: "Charisma",
      prof: true,
      exp: true
    },
    {
      label: "Investigation",
      score: "Intelligence",
      prof: true,
      exp: false
    },
    {
      label: "Medicine",
      score: "Wisdom",
      prof: false,
      exp: false
    },
    {
      label: "Nature",
      score: "Intelligence",
      prof: false,
      exp: false
    },
    {
      label: "Perception",
      score: "Wisdom",
      prof: true,
      exp: false
    },
    {
      label: "Performance",
      score: "Charisma",
      prof: false,
      exp: false
    },
    {
      label: "Persuasion",
      score: "Charisma",
      prof: false,
      exp: false
    },
    {
      label: "Religion",
      score: "Intelligence",
      prof: false,
      exp: false
    },
    {
      label: "Sleight of Hand",
      score: "Dexterity",
      prof: false,
      exp: false
    },
    {
      label: "Stealth",
      score: "Dexterity",
      prof: true,
      exp: true
    },
    {
      label: "Survival",
      score: "Wisdom",
      prof: false,
      exp: false
    }
  ]
};

export default function Char() {
  const { stats, prof } = char;
  return (
    <>
      <header className="head">
        <div className="left">
          <span className="name">Toryc</span>
          <span className="class small">{char.race}</span>
        </div>
        <div className="right">
          <span>{`L${char.level} ${char.class}`}</span>
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
      <div className="spaced-row">
        <div className="stat-float">
          <span>Speed</span>
          <input type="text" value="30" />
        </div>
        <div className="stat-float">
          <span>Initiative</span>
          <input type="text" value="+4" />
        </div>
        <div className="stat-float">
          <span>Proficiency</span>
          <input type="text" value="+2" />
        </div>
        <div className="stat-float">
          <span>Passive Wis</span>
          <input type="text" value="13" />
        </div>
      </div>
      <Divider variant="middle" />
      <section className="mid-stats">
        {stats.map(stat => (
          <StatBox
            label={stat.label}
            value={stat.value}
            prof={stat.prof}
            misc={stat.misc}
            add={prof}
          />
        ))}
      </section>
      <Divider variant="middle" />
      <span className="label">Skills</span>
      <section className="skills">
        {char.skills.map(skill => {
          const { label, score, prof, exp } = skill;
          const scores = toryc["ability-scores"];
          const proficiency = char.prof;
          let value = Math.abs((scores[score.toLowerCase()] - 10) / 2);

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
