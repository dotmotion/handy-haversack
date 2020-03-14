import React, { Component } from "react";
import "./App.css";
import Eye from "./assets/new-eye.png";
import AppDrawer from "./components/ui/AppDrawer";
import CharacterContainer from "./components/CharacterContainer";
import { GlobalProvider } from "./context/GlobalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFistRaised,
  faShieldAlt,
  faMagic,
  // faBookDead,
  faJournalWhills,
  faUser,
  faPaw
} from "@fortawesome/free-solid-svg-icons";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Spells from "./pages/Spells";
import Traits from "./pages/Traits";
import Beasts from "./pages/Beasts";
import Feats from "./pages/Feats";
import Favs from "./pages/Favs";
import Menu from "./pages/Menu";
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
      page: "welcome",
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
            <div
              className="menu-header"
              onClick={() => this.onChange("welcome")}
            >
              <img src={Eye} alt="HEXER" className="menu-icon" />
              <span>Ḥ̨̢̤̥̣̯͇͍̒͋̋̾͗̿͛̃Ẻ̸̹̼̰̖̬̩̝̈́̆̈̀̋́̓X̷̧̥̖̠̪͚̿͌̔́̚͞Ė̶̢̛̠͙͚̟͌̈́͒R̸̙̘̣̝̩̓̊͛̒͢͜͡</span>
            </div>
            <List
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <ListItem
                  button
                  key={"character"}
                  onClick={() => this.onChange("character")}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faUser} className="color-txt" />
                  </ListItemIcon>
                  <span className="color-txt">Character</span>
                </ListItem>
                <Divider />
                <ListItem
                  button
                  key={"spells"}
                  onClick={() => this.onChange("spells")}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faMagic} className="color-txt" />
                  </ListItemIcon>
                  <span className="color-txt">Spells</span>
                </ListItem>
                <Divider />
                <ListItem
                  button
                  key={"traits"}
                  onClick={() => this.onChange("traits")}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faShieldAlt} className="color-txt" />
                  </ListItemIcon>
                  <span className="color-txt">Traits</span>
                </ListItem>
                <Divider />
                <ListItem
                  button
                  key={"feats"}
                  onClick={() => this.onChange("feats")}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon
                      icon={faFistRaised}
                      className="color-txt"
                    />
                  </ListItemIcon>
                  <span className="color-txt">Feats</span>
                </ListItem>
                <Divider />
                <ListItem
                  button
                  key={"beasts"}
                  onClick={() => this.onChange("beasts")}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faPaw} className="color-txt" />
                  </ListItemIcon>
                  <span className="color-txt">Beasts</span>
                </ListItem>
              </div>
              <div style={{ margin: "15px", border: "4px groove var(--txt2)" }}>
                <ListItem
                  button
                  key={"spell book"}
                  onClick={() => this.onChange("spell book")}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon
                      icon={faJournalWhills}
                      className="color-txt"
                    />
                  </ListItemIcon>
                  <span className="color-txt">Spell Book</span>
                </ListItem>
                {/* <Divider />
                <ListItem
                  button
                  key={"spell book"}
                  onClick={() => this.onChange("spell book")}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faBookDead} className="color-txt" />
                  </ListItemIcon>
                  <ListItemText primary={"Beastiary"} className="color-txt" />
                </ListItem> */}
              </div>
            </List>
          </SwipeableDrawer>
          <main className="Main">
            {page === "welcome" && <Menu onChange={this.onChange} />}
            {page === "character" && <CharacterContainer />}
            {page === "spells" && <Spells add={this.addFav} />}
            {page === "beasts" && <Beasts />}
            {page === "feats" && <Feats />}
            {page === "traits" && <Traits />}
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
