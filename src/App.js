import React, { Component } from "react";
import "./App.css";

import BottomNav from "./components/ui/BottomNav";
import AppDrawer from "./components/ui/AppDrawer";
import Character from "./pages/Character";
import Search from "./pages/Search";

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
      page: "search",
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
    this.setState({ page: selected });
  };

  render() {
    const { drawer } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppDrawer data={this.state.page} drawer={this.toggleDrawer} />
          <SwipeableDrawer
            open={drawer}
            onClose={this.toggleDrawer}
            onOpen={this.toggleDrawer}
          >
            <div
              style={{ height: 20, width: 120, backgroundColor: "black" }}
            ></div>
          </SwipeableDrawer>
          <main className="Main">
            {/* <Character /> */}
            <Search />
          </main>
          {/* <BottomNav onChange={this.onChange} /> */}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
