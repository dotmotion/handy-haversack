import React, { Component } from "react";
import "./App.css";
import D20 from "./assets/d20-2.png";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppDrawer from "./components/ui/AppDrawer";
import CharacterContainer from "./components/CharacterContainer";
import Search from "./pages/Search";
// import BottomNav from "./components/ui/BottomNav";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import SearchIcon from "@material-ui/icons/Search";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#263238" },
    secondary: { main: "#78909C" }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      page: "character",
      drawer: false
    };
  }

  toggleDrawer = event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ drawer: !this.state.drawer });
  };

  onChange = selected => {
    this.setState({ page: selected, drawer: false });
  };

  render() {
    const { drawer, page } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <AppDrawer
          data={this.state.page}
          drawer={this.toggleDrawer}
          className="drawer"
        />
        <SwipeableDrawer
          open={drawer}
          onClose={this.toggleDrawer}
          onOpen={this.toggleDrawer}
        >
          <List onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
            <div className="menu-header">
              <img src={D20} alt="d20" className="menu-icon" />
            </div>
            <ListItem
              button
              key={"character"}
              onClick={() => this.onChange("character")}
            >
              <ListItemIcon>
                <AccessibilityIcon style={{ color: "#8b91ac" }} />
              </ListItemIcon>
              <ListItemText primary={"Character"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key={"spells"}
              onClick={() => this.onChange("spells")}
            >
              <ListItemIcon>
                <SearchIcon style={{ color: "#8b91ac" }} />
              </ListItemIcon>
              <ListItemText primary={"Search Spells"} />
            </ListItem>
          </List>
        </SwipeableDrawer>
        <main className="Main">
          {page === "character" && <CharacterContainer />}
          {page === "spells" && <Search />}
        </main>
        {/* {page === "character" && <BottomNav onChange={this.onChange} />} */}
      </ThemeProvider>
    );
  }
}

export default App;
