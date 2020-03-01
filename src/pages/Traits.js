import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import FeatCard from "../components/ui/FeatCard";

import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    "& placeholder.Mui-focused": {
      color: "#fff"
    },
    "& .MuiInputBase-input": {
      color: "var(--txt2)"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "var(--txt2)"
    },
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid var(--light)"
    }
  },
  input: {
    color: "var(--txt2)",
    fontWeight: 600,
    fontSize: 20,
    margin: 5
  },
  label: {
    color: "white"
  }
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Search(props) {
  const { classes } = props;

  const { traits } = useContext(GlobalContext);
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  const onSearchChange = e => {
    setSearch(e ? e.target.value : "");
  };

  const openModal = async spell => {
    setSelected(spell);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelected(null);
  };

  let filteredTraits = traits.filter(feat => {
    return feat.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="list">
        <header className="search-header">
          <TextField
            placeholder="Search"
            type="search"
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
        <div style={{ width: "95%" }}>
          {modal && (
            <FeatCard
              feat={selected}
              open={modal}
              close={closeModal}
              trans={Transition}
            />
          )}
          {filteredTraits.map(feat => (
            <Paper
              elevation={5}
              className="list-paper"
              onClick={() => openModal(feat)}
              key={feat.name}
            >
              {feat.name}
            </Paper>
          ))}
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Search);
