import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import SpellModal from "../components/ui/SpellModal";
import FilterFabS from "../components/ui/FilterFabS";
import ExpPanel from "../components/ui/ExpPanel";
import SpellCard from "../components/ui/SpellCard";

import Dialog from "@material-ui/core/Dialog";
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

function Search(props) {
  const { classes, add } = props;

  const {
    spells,
    lists: { classList, levelList, schoolList }
  } = useContext(GlobalContext);

  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState("class");
  const [search, setSearch] = useState("");

  const classNames = Object.keys(classList);
  const schoolNames = Object.keys(schoolList);

  const openModal = async spell => {
    setSelected(spell);
    setModal(true);
  };

  const filterChange = selection => {
    setFilter(selection);
    setSearch("");
    window.scrollTo(0, 0);
  };

  const closeModal = () => {
    // setSelected(null);
    setModal(false);
  };

  const onSearchChange = e => {
    setSearch(e ? e.target.value : "");
  };

  let filteredSpells = spells.filter(spell => {
    return spell.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="list">
        <FilterFabS setFilter={filterChange} />
        <header className="search-header">
          {filter === "spells" && (
            <TextField
              placeholder="Search"
              type="search"
              fullWidth
              variant="outlined"
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
              <SpellModal spell={selected} close={closeModal} add={add} />
            </Dialog>
          )}
          {filter === "spells" &&
            filteredSpells.map(spell => (
              <SpellCard key={spell.name} spell={spell} openModal={openModal} />
            ))}

          {filter === "class" &&
            classNames.map(c => (
              <ExpPanel
                key={c}
                name={c}
                type={"class"}
                spells={classList[c]}
                onClick={openModal}
              />
            ))}

          {filter === "school" &&
            schoolNames.map(s => (
              <ExpPanel
                key={s}
                name={s}
                type={"school"}
                spells={schoolList[s]}
                onClick={openModal}
              />
            ))}

          {filter === "level" &&
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(l => (
              <ExpPanel
                key={l}
                name={l === 0 ? "Cantrips" : `Level ${l}`}
                spells={levelList[l]}
                onClick={openModal}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Search);
