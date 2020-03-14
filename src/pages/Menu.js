import React from "react";
import Eye from "../assets/new-eye.png";

import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFistRaised,
  faShieldAlt,
  faMagic,
  faJournalWhills,
  faUser,
  faPaw
} from "@fortawesome/free-solid-svg-icons";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: 120,
    margin: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    color: "var(--txt2)",
    fontWeight: 600,
    fontSize: 20,
    margin: 5
  },
  label: {
    color: "white"
  },
  heading: { fontWeight: 600, fontSize: 18, textAlign: "center" },
  highlight: { fontWeight: 600, textDecoration: "underline", display: "inline" }
};

function Menu(props) {
  const { onChange } = props;

  return (
    <>
      <div className="list">
        <img src={Eye} alt="HEXER" className="menu-icon-big" />
        <span style={{ color: "#8b91ac" }}>Ḥ̨̢̤̥̣̯͇͍̒͋̋̾͗̿͛̃Ẻ̸̹̼̰̖̬̩̝̈́̆̈̀̋́̓X̷̧̥̖̠̪͚̿͌̔́̚͞Ė̶̢̛̠͙͚̟͌̈́͒R̸̙̘̣̝̩̓̊͛̒͢͜͡</span>
        <div className="buttons">
          <List className="menu-list-box">
            <ListItem
              button
              className="menu-box"
              key={"character"}
              onClick={() => onChange("character")}
            >
              <FontAwesomeIcon icon={faUser} className="menu-align" />

              <span className="menu-align">Character</span>
            </ListItem>

            <ListItem
              button
              className="menu-box"
              key={"spells"}
              onClick={() => onChange("spells")}
            >
              <FontAwesomeIcon icon={faMagic} className="menu-align" />

              <span className="menu-align">Spells</span>
            </ListItem>

            <ListItem
              button
              className="menu-box"
              key={"traits"}
              onClick={() => onChange("traits")}
            >
              <FontAwesomeIcon icon={faShieldAlt} className="menu-align" />

              <span className="menu-align">Traits</span>
            </ListItem>

            <ListItem
              button
              className="menu-box"
              key={"feats"}
              onClick={() => onChange("feats")}
            >
              <FontAwesomeIcon icon={faFistRaised} className="menu-align" />

              <span className="menu-align">Feats</span>
            </ListItem>

            <ListItem
              button
              className="menu-box"
              key={"beasts"}
              onClick={() => onChange("beasts")}
            >
              <FontAwesomeIcon icon={faPaw} className="menu-align" />

              <span className="menu-align">Beasts</span>
            </ListItem>

            <ListItem
              button
              className="menu-box"
              key={"spell book"}
              onClick={() => onChange("spell book")}
            >
              <FontAwesomeIcon icon={faJournalWhills} className="menu-align" />

              <span className="menu-align">Spell Book</span>
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Menu);
