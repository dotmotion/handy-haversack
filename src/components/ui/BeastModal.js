import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { beasts } from "../../assets/db/beasts";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "var(--main)"
  },
  title: {
    marginLeft: -theme.spacing(2),
    flex: 1,
    textAlign: "center"
  }
}));

export default function BeastModal(props) {
  const { beast, close } = props;
  const classes = useStyles();

  const stats = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma"
  ];

  const getString = prop => {
    let temp = "";
    const tempList = Object.keys(beast[prop]);
    for (let i = 0; i < tempList.length; i++) {
      const key =
        tempList[i] === "passive_perception"
          ? "Passive Perception"
          : tempList[i];
      if (i === 0) {
        temp = `${key}: ${beast[prop][tempList[i]]}`;
      } else {
        temp = temp.concat("  ", `${key}: ${beast[prop][tempList[i]]}`);
      }
    }
    return temp;
  };

  const getProfs = () => {
    let temp = "";
    for (let i = 0; i < beast.proficiencies.length; i++) {
      if (i === 0) {
        temp = `${beast.proficiencies[i].name} +${beast.proficiencies[i].value}`;
      } else {
        temp = temp.concat(
          ", ",
          `${beast.proficiencies[i].name} +${beast.proficiencies[i].value}`
        );
      }
    }
    return temp;
  };

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={close}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            {beast.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="spell-card-content">
        <div className="text-divider">
          <div className="col">
            <strong></strong>
            <span
              style={{ fontStyle: "italic", fontSize: 14 }}
            >{`${beast.size} beast, ${beast.alignment}`}</span>
          </div>
        </div>

        <div className="beast-box">
          <div className="beast-stats">
            {stats.map(stat => (
              <div className="beast-container" key={stat}>
                <div className="beast-num">{beast[stat]}</div>
                <div className="beast-stat-name">{stat.substring(0, 3)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="dual-box">
          <div className="beast-box">
            <strong>{"Hit Points: "}</strong>
            {beast.hit_points}
          </div>
          <div className="beast-box">
            <strong>{"Armor Class: "}</strong>
            {beast.armor_class}
          </div>
          <div className="beast-box">
            <strong>{"CR: "}</strong>
            {beast.cr}
          </div>
        </div>

        <div className="beast-box">
          <strong>{"Speed: "}</strong>
          {getString("speed")}
        </div>
        <div className="beast-box">
          <strong>{"Senses: "}</strong>
          {getString("senses")}
        </div>
        {beast.proficiencies.length > 0 && (
          <div className="beast-box">
            <strong>{"Skills: "}</strong>
            {getProfs()}
          </div>
        )}
        <div className="beast-box">
          <strong>{"Languages: "}</strong>
          {beast.languages === "" ? "none" : beasts.language}
        </div>
        {beast.special_abilities &&
          beast.special_abilities.map(thing => {
            return (
              <div className="beast-box" key={thing.name}>
                <strong>{`${thing.name}: `}</strong>
                {thing.desc}
              </div>
            );
          })}
        {beast.actions.length > 0 && (
          <div style={{ marginBottom: 15 }}>
            <div className="text-divider">Actions</div>
            {beast.actions.map(thing => {
              return (
                <div className="beast-box" key={thing.name}>
                  <strong>{`${thing.name}: `}</strong>
                  {thing.desc}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
