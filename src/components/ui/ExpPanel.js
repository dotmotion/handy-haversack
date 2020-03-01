import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

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

const ExpansionPanel2 = withStyles({
  root: {
    backgroundColor: "#272f3d",
    margin: "5px 15px",
    color: "#fff",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "5px 15px"
    }
  },
  expanded: {
    margin: "5px 15px"
  }
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
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
              <Typography
                style={{ fontWeight: 600, fontSize: 20, textAlign: "center" }}
              >
                {name}
              </Typography>
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
                        <Typography
                          style={{
                            fontWeight: 600,
                            fontSize: 20,
                            textAlign: "center"
                          }}
                        >
                          {level === "0" ? `Cantrips` : `Level ${level}`}
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        {spells[level].map(spell => (
                          <Paper
                            elevation={5}
                            className="list-paper-inner"
                            onClick={() => onClick(spell)}
                            key={spell.name}
                          >
                            {spell.name}
                          </Paper>
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
                  <Paper
                    elevation={5}
                    className="list-paper-inner"
                    onClick={() => onClick(spell)}
                    key={spell.name}
                  >
                    {spell.name}
                  </Paper>
                ))}
              </ExpansionPanelDetails>
            </ExpansionPanel2>
          )}
        </div>
      )}
    </div>
  );
}
