import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import PersonIcon from "@material-ui/icons/Person";
import WidgetsIcon from "@material-ui/icons/Widgets";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#263238" },
    secondary: { main: "#78909C" }
  }
});

const useStyles = makeStyles({
  root: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#78909c"
  }
});

export default function BottomNav(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const onChange = value => {
    let selected;
    switch (value) {
      case 0: {
        selected = "character";
        break;
      }
      case 1: {
        selected = "combat";
        break;
      }
      case 2: {
        selected = "inventory";
        break;
      }
      case 3: {
        selected = "spells";
        break;
      }
      default:
        break;
    }
    props.onChange(selected);
    setValue(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
        showLabels={false}
        className={classes.root}
        color={"secondary"}
      >
        <BottomNavigationAction label="Character" icon={<PersonIcon />} />
        <BottomNavigationAction label="Combat" icon={<SportsKabaddiIcon />} />
        <BottomNavigationAction label="Inventory" icon={<WidgetsIcon />} />
        <BottomNavigationAction label="Spells" icon={<MenuBookIcon />} />
      </BottomNavigation>
    </ThemeProvider>
  );
}
