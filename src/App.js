import React, { Component } from "react";
import "./App.css";
import Eye from "./assets/new-eye.png";
import AppDrawer from "./components/ui/AppDrawer";
import CharacterContainer from "./components/CharacterContainer";
import { GlobalProvider } from "./context/GlobalState";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Spells from "./pages/Spells";
import Favs from "./pages/Favs";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import MenuBookIcon from "@material-ui/icons/MenuBook";
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
      drawer: false,
      favs: []
    };
  }

  componentDidMount = () => {
    const book = window.localStorage.getItem("favs");
    const char = window.localStorage.getItem("char");
    if (book) {
      const favs = JSON.parse(book);
      this.setState({ favs });
    }
    if (char) {
      const character = JSON.parse(char);
      this.setState({ character });
    }
  };

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
    window.scrollTo(0, 0);
  };

  addFav = spell => {
    let { favs } = this.state;
    favs.push(spell);

    this.setState({ favs });

    window.localStorage.setItem("favs", JSON.stringify(favs));
  };

  removeFav = spell => {
    const { favs } = this.state;
    const newFavs = favs.filter(s => s.name !== spell.name);

    this.setState({ favs: newFavs });
    window.localStorage.setItem("favs", JSON.stringify(favs));
  };

  render() {
    const { drawer, page, favs } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <GlobalProvider>
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
                <img src={Eye} alt="HEXER" className="menu-icon" />
                <span>Ḥ̨̢̤̥̣̯͇͍̒͋̋̾͗̿͛̃Ẻ̸̹̼̰̖̬̩̝̈́̆̈̀̋́̓X̷̧̥̖̠̪͚̿͌̔́̚͞Ė̶̢̛̠͙͚̟͌̈́͒R̸̙̘̣̝̩̓̊͛̒͢͜͡</span>
              </div>
              <ListItem
                button
                key={"character"}
                onClick={() => this.onChange("character")}
              >
                <ListItemIcon>
                  <AccessibilityIcon className="color-txt" />
                </ListItemIcon>
                <ListItemText primary={"Character"} className="color-txt" />
              </ListItem>
              <Divider />
              <ListItem
                button
                key={"spells"}
                onClick={() => this.onChange("spells")}
              >
                <ListItemIcon>
                  <SearchIcon className="color-txt" />
                </ListItemIcon>
                <ListItemText primary={"Search Spells"} className="color-txt" />
              </ListItem>
              <Divider />
              <ListItem
                button
                key={"spell book"}
                onClick={() => this.onChange("spell book")}
              >
                <ListItemIcon>
                  <MenuBookIcon className="color-txt" />
                </ListItemIcon>
                <ListItemText primary={"Spell Book"} className="color-txt" />
              </ListItem>
            </List>
          </SwipeableDrawer>
          <main className="Main">
            {page === "character" && <CharacterContainer />}
            {page === "spells" && <Spells add={this.addFav} />}
            {page === "spell book" && (
              <Favs spells={favs} del={this.removeFav} />
            )}
          </main>
        </GlobalProvider>
      </ThemeProvider>
    );
  }
}

export default App;
