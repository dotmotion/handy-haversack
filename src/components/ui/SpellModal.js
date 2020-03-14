import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

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

export default function SpellModal(props) {
  const { spell, close, add, del } = props;
  const classes = useStyles();
  let classString = spell.classes[0].name;
  if (spell.classes.length > 1) {
    for (let i = 1; i < spell.classes.length; i++) {
      classString = classString.concat(", ", spell.classes[i].name);
    }
  }

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
            {spell.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="spell-card-content">
        <div className="spell-box">
          <span className="bold">{"Level: "}</span>
          {spell.level === 0
            ? `0 (Cantrip) - ${spell.school.name}`
            : `${spell.level} - ${spell.school.name}`}
        </div>

        <div className="spell-box">
          <span className="bold">{"Cast time: "}</span>
          {spell.casting_time}
        </div>
        <div className="spell-box">
          <span className="bold">{"Range: "}</span>
          {spell.range}
        </div>

        <div className="dual-box">
          <div className="spell-box">
            <span className="bold">{"Components: "}</span>
            {spell.components}
          </div>
          <div className="spell-box">
            <span className="bold">{"Duration: "}</span>
            {spell.duration}
          </div>
        </div>
        <div className="spell-box">
          <span className="bold">{"Classes: "}</span>
          {classString}
        </div>
        {spell.ritual && (
          <div className="spell-box">
            <span className="bold">{"Can be casted as a Ritual"}</span>
          </div>
        )}
        {spell.concentration && (
          <div className="spell-box">
            <span className="bold">{"Requires Concentration"}</span>
          </div>
        )}
        <div className="spell-box" style={{ padding: 15 }}>
          {spell.desc.map(section => (
            <p key={section}>{section}</p>
          ))}
          {spell.higher_level && (
            <>
              <p>
                <span className="bold">{"At Higher Levels. "}</span>{" "}
                {spell.higher_level}
              </p>
            </>
          )}
          {spell.material && (
            <p style={{ color: "white" }}>
              <span className="bold">{"Material: "}</span>
              {spell.material}
            </p>
          )}
        </div>
        {add && (
          <Button
            onClick={() => add(spell)}
            variant="contained"
            fullWidth
            className="spell-button"
            style={{ borderBottom: "2px solid #3db598" }}
          >
            Add to spellbook
          </Button>
        )}
        {del && (
          <Button
            onClick={() => del(spell)}
            variant="contained"
            fullWidth
            className="spell-button"
            style={{ borderBottom: "2px solid red" }}
          >
            Remove from spellbook
          </Button>
        )}
        <div className="page">{`[ PHB ${spell.page} ]`}</div>
      </div>
    </>
  );
}
