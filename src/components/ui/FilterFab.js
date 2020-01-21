import React from "react";
// import { useStyles, theme } from "./styles.js";

import { ThemeProvider } from "@material-ui/styles";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
// import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import SecurityIcon from "@material-ui/icons/Security";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SchoolIcon from "@material-ui/icons/School";
import SortIcon from "@material-ui/icons/Sort";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#4c576a" },
    secondary: { main: "#95a5bb" }
  },
  overrides: {
    MuiFab: {
      primary: {
        color: "var(--txt2)",
        backgroundColor: "#314455",
        "&:hover": {
          backgroundColor: "#314455"
        }
      }
    },
    MuiSpeedDialAction: {
      fab: {
        color: "var(--txt2)",
        backgroundColor: "#314455",
        "&:hover": {
          backgroundColor: "#314455"
        }
      }
    }
  }
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  speedDial: {
    position: "fixed",
    display: "flex",
    bottom: "21px",
    right: "21px",
    zIndex: "30"
  },
  tooltipHover: {
    width: "108px",
    height: "32px",
    boxShadow: "0 12px 25px 0 rgba(14, 28, 40, 0.3)",
    border: "solid 1px rgb(151, 170, 189)",
    backgroundColor: "rgba(49, 68, 85, 0.7)",
    fontFamily: "Exo2",
    fontSize: "14px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "rgb(255, 255, 255)"
  },
  tooltip: {
    backgroundColor: "var(--main)",
    color: "var(--txt2)"
  },
  icon: {
    height: 25,
    width: 25
  }
}));

export default function FilterFab(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const onClick = (e, action) => {
    props.setFilter(action);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(open ? false : true);
  };

  const actions = [
    {
      icon: <SortByAlphaIcon />,
      name: "Alphabetically",
      action: "spells"
    },
    {
      icon: <SecurityIcon />,
      name: "Class",
      action: "class"
    },
    // {
    //   icon: <FormatListNumberedIcon />,
    //   name: "Level",
    //   action: "level"
    // },
    {
      icon: <SchoolIcon />,
      name: "School",
      action: "school"
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <ClickAwayListener onClickAway={handleClose}>
        <SpeedDial
          ariaLabel="Filter Spells"
          className={classes.speedDial}
          icon={
            <SpeedDialIcon
              classes={{ icon: classes.icon }}
              icon={<SortIcon style={{ color: "var(--txt2)" }} />}
              openIcon={<CloseRoundedIcon />}
            />
          }
          onClick={handleOpen}
          open={open}
          direction="up"
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipPlacement="left"
              tooltipOpen
              classes={{ staticTooltipLabel: classes.tooltip }}
              onClick={e => onClick(e, action.action)}
            />
          ))}
        </SpeedDial>
      </ClickAwayListener>
    </ThemeProvider>
  );
}
