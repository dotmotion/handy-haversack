import React from "react";
import Eye from "../assets/new-eye.png";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFistRaised,
  faShieldAlt,
  faMagic,
  faBookDead,
  faUser
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
              key={"character"}
              onClick={() => onChange("character")}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faUser} className="color-txt" />
              </ListItemIcon>
              <ListItemText primary={"Character"} className="color-txt" />
            </ListItem>
            <Divider />
            <ListItem button key={"spells"} onClick={() => onChange("spells")}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faMagic} className="color-txt" />
              </ListItemIcon>
              <ListItemText primary={"Spells"} className="color-txt" />
            </ListItem>
            <Divider />
            <ListItem button key={"traits"} onClick={() => onChange("traits")}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faShieldAlt} className="color-txt" />
              </ListItemIcon>
              <ListItemText primary={"Traits"} className="color-txt" />
            </ListItem>
            <Divider />
            <ListItem button key={"feats"} onClick={() => onChange("feats")}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faFistRaised} className="color-txt" />
              </ListItemIcon>
              <ListItemText primary={"Feats"} className="color-txt" />
            </ListItem>
            <Divider />
            <ListItem
              button
              key={"spell book"}
              onClick={() => onChange("spell book")}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faBookDead} className="color-txt" />
              </ListItemIcon>
              <ListItemText primary={"Spell Book"} className="color-txt" />
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Menu);
