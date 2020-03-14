import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const ExpansionPanel = withStyles({
  root: {
    backgroundColor: "#1c2129",
    margin: "15px 15px",
    color: "#8b91ac",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "15px 15px"
    }
  },
  expanded: {
    margin: "15px 15px"
  }
})(MuiExpansionPanel);

const styles = {
  root: {
    "& placeholder.Mui-focused": {
      color: "#fff"
    },
    "& .MuiInputBase-input": {
      color: "var(--txt)"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "var(--txt2)"
    },
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid var(--light)"
    }
  },
  exp: { borderRadius: 8 },
  input: {
    color: "var(--txt2)",
    backgroundColor: "var(--dark)",
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

function Feats(props) {
  const { classes } = props;

  const { feats } = useContext(GlobalContext);
  const [search, setSearch] = useState("");

  const onSearchChange = e => {
    setSearch(e ? e.target.value : "");
  };

  let filteredFeats = feats.filter(feat => {
    return feat.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="list">
        <header className="search-header">
          <TextField
            placeholder="Search"
            type="search"
            variant="outlined"
            fullWidth
            InputProps={{
              className: classes.input,
              endAdornment: (
                <IconButton
                  onClick={() => onSearchChange()}
                  size="small"
                  disableRipple={true}
                >
                  <ClearIcon
                    style={{
                      color: "var(--txt2)",
                      opacity: search !== "" ? 1 : 0
                    }}
                  />
                </IconButton>
              )
            }}
            className={classes.root}
            onChange={e => onSearchChange(e)}
            value={search}
          />
        </header>
        <div style={{ width: "95%", marginTop: "10px" }}>
          {filteredFeats.map(feat => (
            <ExpansionPanel
              key={feat.name}
              TransitionProps={{ unmountOnExit: true }}
              className={classes.exp}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#8b91ac" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{feat.name}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                style={{
                  flexDirection: "column",
                  fontSize: "14px",
                  color: "white"
                }}
              >
                {feat.preq && (
                  <>
                    <span className={classes.highlight}>{`Prequisite: `}</span>
                    <p>{feat.preq}</p>
                  </>
                )}
                {feat.text.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Feats);
