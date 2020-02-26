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

export default function FeatCard(props) {
  const { feat, open, trans } = props;
  const classes = useStyles();

  let _class = "";
  let thing = feat.class;

  if (thing) {
    if (Array.isArray(thing)) {
      _class = thing[0];
      for (let i = 1; i < thing.length; i++) {
        _class = _class + ", " + thing[i];
      }
    } else {
      _class = thing.name;
    }
  } else {
    _class = "Any";
  }

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
            {feat.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="spell-card-content">
        <div className="spell-box">
          <span className="bold">{"Level: "}</span>
          {feat.level ? feat.level : "Any"}
        </div>
        <div className="spell-box">
          <span className="bold">{"Class: "}</span>
          {_class}
        </div>
        {feat.subclass && Object.keys(feat.subclass).length > 0 && (
          <div className="spell-box">
            <span className="bold">{"Subclass: "}</span>
            {feat.subclass.name}
          </div>
        )}
        {feat.preq && (
          <div className="spell-box">
            <span className="bold">{"Prerequisites: "}</span>
            {feat.preq}
          </div>
        )}
        <div className="spell-box">
          {feat.desc.map(section => (
            <p key={section}>{section}</p>
          ))}
        </div>
        {feat.page && <div className="page">{`[ PHB ${feat.page} ]`}</div>}
      </div>
    </Dialog>
  );
}
