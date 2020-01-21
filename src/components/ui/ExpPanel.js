import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const ExpansionPanel = withStyles({
  root: {
    backgroundColor: "#4c576a",
    margin: 10,
    color: "#fff",
    // border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: 10
    },
    "&$focused": {
      backgroundColor: "#4c576a"
    }
  },
  expanded: {}
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
  const [expanded, setExpanded] = React.useState(false);
  const { name, spells, onClick } = props;

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {spells.length > 0 && (
        <ExpansionPanel
          expanded={expanded}
          onChange={handleChange}
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
        </ExpansionPanel>
      )}
    </div>
  );
}
