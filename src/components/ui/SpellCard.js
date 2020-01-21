import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

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

export default function SpellCard2(props) {
  const { spell, open, trans } = props;
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={props.close}
      TransitionComponent={trans}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.close}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {spell.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="spell-card-content">
        <div className="spell-box">
          <span className="bold">{"Level: "}</span>
          {spell.level}
        </div>
        <div className="spell-box">
          <span className="bold">{"Cast time: "}</span>
          {spell.casting_time}
        </div>
        <div className="spell-box">
          <span className="bold">{"Range: "}</span>
          {spell.range}
        </div>
        <div className="spell-box">
          <span className="bold">{"Components: "}</span>
          {spell.components}
        </div>
        <div className="spell-box">
          <span className="bold">{"Duration: "}</span>
          {spell.duration}
        </div>
        <div className="spell-box">
          <span className="bold">{"School: "}</span>
          {spell.school.name}
        </div>
        <div className="spell-box">
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
            <p>
              <span className="bold">{"Material: "}</span>
              {spell.material}
            </p>
          )}
        </div>
        <div className="page">{`[ ${spell.page} ]`}</div>
      </div>
    </Dialog>
  );
}
