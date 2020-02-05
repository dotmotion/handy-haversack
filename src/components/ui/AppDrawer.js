import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    position: "sticky",
    top: 0,
    zIndex: 999
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    textTransform: "capitalize",
    marginLeft: "-48px"
  },
  appBar: {
    backgroundColor: "#2d3645"
  }
}));

export default function AppDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={3}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
            onClick={e => props.drawer(e)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.data}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
