import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Paper from "@material-ui/core/Paper";

const ExpansionPanel2 = withStyles({
  root: {
    backgroundColor: "#272f3d",
    margin: "5px",
    color: "#fff",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "5px"
    }
  },
  expanded: {
    margin: "5px"
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
  const [expanded, setExpanded] = React.useState(false);
  let { cr, beasts, onClick } = props;

  const handleOut = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div>
        <ExpansionPanel2
          expanded={expanded}
          onChange={handleOut}
          TransitionProps={{ unmountOnExit: true }}
        >
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <div
              className="text-divider2"
              style={{
                width: "100%",
                fontSize: "22px",
                color: "var(--txt)"
              }}
            >
              {cr}
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {beasts.map(beast => (
              <Paper
                elevation={5}
                className="list-paper2"
                onClick={() => onClick(beast)}
                key={beast.name}
              >
                {beast.name}
              </Paper>
            ))}
          </ExpansionPanelDetails>
        </ExpansionPanel2>
      </div>
    </div>
  );
}
