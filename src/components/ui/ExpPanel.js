import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

import SpellCard from "./SpellCard";

const ExpansionPanel = withStyles({
  root: {
    backgroundColor: "#2d3645",
    margin: 0,
    color: "#8b91ac",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: 0
    }
  },
  expanded: {
    margin: 0
  }
})(MuiExpansionPanel);

const ExpansionPanel2 = withStyles({
  root: {
    backgroundColor: "#2d3645",
    margin: 0,
    color: "#fff",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: 0
    }
  },
  expanded: {
    margin: 0
  }
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "#2d3645",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "8px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: 5,
    flexDirection: "column"
  }
}))(MuiExpansionPanelDetails);

export default function ExpPanel(props) {
  const [expandedOut, setExpandedOut] = React.useState(false);
  const [expandedIn, setExpandedIn] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
  });
  let { name, spells, onClick, type } = props;
  const levels = Object.keys(spells);

  const handleOut = () => {
    setExpandedOut(!expandedOut);
  };

  const handleIn = lvl => {
    let newObj = expandedIn;
    newObj[lvl] = !expandedIn[lvl];
    setData(newObj);
  };

  const setData = newObj => {
    setExpandedIn(newObj);
  };

  return (
    <div>
      {type === "class" && (
        <div>
          <ExpansionPanel
            expanded={expandedOut}
            onChange={handleOut}
            TransitionProps={{ unmountOnExit: true }}
          >
            <ExpansionPanelSummary
              aria-controls="outer-panel-content"
              id="outer-panel-header"
            >
              <div
                className="text-divider"
                style={{
                  width: "100%",
                  fontSize: "24px",
                  color: "#8b91ac",
                  fontWeight: 600
                }}
              >
                {name}
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {levels.map(
                level =>
                  spells[level].length > 0 && (
                    <ExpansionPanel2
                      key={`outer-${level}`}
                      expanded={expandedIn.level}
                      onChange={() => handleIn(level)}
                      TransitionProps={{ unmountOnExit: true }}
                    >
                      <ExpansionPanelSummary
                        aria-controls={`panel-${level}-content`}
                        id={`panel-${level}-header`}
                      >
                        <div
                          className="text-divider2"
                          style={{
                            width: "100%",
                            fontSize: "16px"
                          }}
                        >
                          {level === "0" ? `Cantrips` : `Level ${level}`}
                        </div>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        {spells[level].map(spell => (
                          <SpellCard
                            key={spell.name}
                            spell={spell}
                            openModal={() => onClick(spell)}
                          />
                        ))}
                      </ExpansionPanelDetails>
                    </ExpansionPanel2>
                  )
              )}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      )}
      {type === "school" && (
        <div>
          {spells.length > 0 && (
            <ExpansionPanel2
              expanded={expandedOut}
              onChange={handleOut}
              TransitionProps={{ unmountOnExit: true }}
            >
              <ExpansionPanelSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography
                  style={{ fontWeight: 600, fontSize: 20, textAlign: "center" }}
                >
                  {name}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {spells.map(spell => (
                  <SpellCard
                    key={spell.name}
                    spell={spell}
                    openModal={() => onClick(spell)}
                  />
                ))}
              </ExpansionPanelDetails>
            </ExpansionPanel2>
          )}
        </div>
      )}
    </div>
  );
}
