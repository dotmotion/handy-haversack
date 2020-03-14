import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import BeastModal from "../components/ui/BeastModal";
import FilterFabB from "../components/ui/FilterFabB";
import ExpPanel2 from "../components/ui/ExpPanel2";

import Dialog from "@material-ui/core/Dialog";
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
    backgroundColor: "var(--dark)",
    fontWeight: 600,
    fontSize: 20,
    margin: 5
  },
  label: {
    color: "white"
  }
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" in={true} ref={ref} {...props} />;
});

function Beasts(props) {
  const { classes } = props;

  const { beasts } = useContext(GlobalContext);

  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState("name");
  const [search, setSearch] = useState("");

  const openModal = beast => {
    setSelected(beast);
    setModal(true);
  };

  const filterChange = selection => {
    setFilter(selection);
    setSearch("");
    window.scrollTo(0, 0);
  };

  const closeModal = () => {
    setSelected(null);
    setModal(false);
  };

  const orderBeasts = () => {
    let beastObj = {
      "0": [],
      "1/8": [],
      "1/4": [],
      "1/2": [],
      "1": [],
      "2": [],
      "3": [],
      "4": [],
      "5": [],
      "6": [],
      "7": [],
      "8": []
    };
    beasts.map(beast => {
      const chal = beast.cr;
      beastObj[chal].push(beast);
      return null;
    });
    return beastObj;
  };

  const onSearchChange = e => {
    setSearch(e ? e.target.value : "");
  };

  let filteredBeasts = beasts.filter(beast => {
    return beast.name.toLowerCase().includes(search.toLowerCase());
  });

  const orderedBeasts = orderBeasts();
  const crList = [
    "0",
    "1/8",
    "1/4",
    "1/2",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8"
  ];

  return (
    <>
      <div className="list">
        <FilterFabB setFilter={filterChange} />
        <header className="search-header">
          {filter === "name" && (
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
          )}
        </header>
        <div style={{ width: "95%" }}>
          {modal && (
            <Dialog
              fullScreen
              keepMounted
              open={modal}
              onClose={closeModal}
              TransitionComponent={Transition}
            >
              <BeastModal beast={selected} close={closeModal} />
            </Dialog>
          )}
          {filter === "name" &&
            filteredBeasts.map(beast => (
              <Paper
                elevation={5}
                className="list-paper2"
                onClick={() => openModal(beast)}
                key={beast.name}
              >
                {beast.name}
              </Paper>
            ))}

          {filter === "cr" &&
            crList.map(c => (
              <ExpPanel2
                key={c}
                cr={c}
                beasts={orderedBeasts[c]}
                onClick={openModal}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Beasts);
