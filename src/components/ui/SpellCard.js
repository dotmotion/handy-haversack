import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  dialogPaper: {
    maxHeight: "80vh"
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const SpellCard = props => {
  const { spell, classes } = props;
  console.log("TCL: spell", spell);
  const [open, setOpen] = React.useState(props.open);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={props.close}
        // className={{ paper: classes.dialogPaper }}
        TransitionComponent={Transition}
        open={open}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div className="column">
              <Typography variant="h5">{spell.name}</Typography>
              <span
                style={{ fontSize: "12px", fontWeight: "600", color: "gray" }}
              >
                {spell.school.name}
              </span>
            </div>
            <div
              className="column"
              style={{ fontSize: "12px", fontWeight: "600", color: "gray" }}
            ></div>
            <div
              className="column"
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "gray",
                alignItems: "flex-end"
              }}
            >
              <div className="row">
                <span style={{ color: "black" }}>{"Range: "}</span>
                <span>{spell.range}</span>
              </div>
              <div className="row">
                <span style={{ color: "black" }}>{"Cast time: "}</span>
                <span>{spell.casting_time}</span>
              </div>
              <div className="row">
                <span style={{ color: "black" }}>{"Duration: "}</span>
                <span>{spell.duration}</span>
              </div>
            </div>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6" gutterBottom>
            Description:
          </Typography>
          {spell.desc.map(section => (
            <Typography variant="body2" gutterBottom key={section}>
              {section}
            </Typography>
          ))}
          {spell.higher_level && (
            <>
              <Typography variant="h6" gutterBottom>
                Higher Level:
              </Typography>
              <Typography variant="body2" gutterBottom>
                {spell.higher_level}
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(SpellCard);
