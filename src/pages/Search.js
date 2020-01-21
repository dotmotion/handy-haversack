import React, { Component } from "react";

import { spells } from "../assets/db/spells";
import D20 from "../assets/d20.svg";
import { request, sortByClass, sortByLevel, sortBySchool } from "../utils/lib";

import SpellCard from "../components/ui/SpellCard";
import FilterFab from "../components/ui/FilterFab";
import ExpPanel from "../components/ui/ExpPanel";

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

class Search extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      spells,
      selected: null,
      modal: false,
      filter: "spells",
      searchfield: "",
      spellsByClass: {},
      spellsByLevel: {},
      spellsBySchool: {},
      classList: [],
      schoolList: []
    };
  }

  componentWillMount = async () => {
    const { spells } = this.state;

    const spellsByClass = await sortByClass(spells);
    const spellsByLevel = await sortByLevel(spells);
    const spellsBySchool = await sortBySchool(spells);

    this.setState({
      spellsByClass,
      spellsByLevel,
      spellsBySchool
    });

    this.getLists(spellsByClass, spellsBySchool);
  };

  getLists = (spellsByClass, spellsBySchool) => {
    const classList = Object.keys(spellsByClass);
    const schoolList = Object.keys(spellsBySchool);

    this.setState({
      classList,
      schoolList,
      loaded: true
    });
  };

  openModal = async spell => {
    const res = await request(spell.url);
    this.setState({ modal: true, selected: res });
  };

  setFilter = selection => {
    this.setState({ filter: selection });
  };

  closeModal = () => {
    this.setState({ modal: false, selected: null });
  };

  onSearchChange = e => {
    this.setState({ searchfield: e ? e.target.value : "" });
  };

  render() {
    const { spells, modal, selected, searchfield, filter, loaded } = this.state;
    const { spellsByClass, spellsByLevel, spellsBySchool } = this.state;
    const { schoolList, classList } = this.state;
    const { classes } = this.props;
    let filteredSpells;

    switch (filter) {
      case "spells":
        filteredSpells = spells.filter(spell => {
          return spell.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        break;
      case "class":
        filteredSpells = {};
        classList.forEach(c => {
          filteredSpells[c] = spellsByClass[c].filter(spell => {
            return spell.name.toLowerCase().includes(searchfield.toLowerCase());
          });
        });
        break;
      case "level":
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map(num => {
          filteredSpells[num] = spellsByLevel[num].filter(spell => {
            return spell.name.toLowerCase().includes(searchfield.toLowerCase());
          });
          return null;
        });
        break;
      case "school":
        filteredSpells = {};
        schoolList.map(c => {
          filteredSpells[c] = spellsBySchool[c].filter(spell => {
            return spell.name.toLowerCase().includes(searchfield.toLowerCase());
          });
          return null;
        });
        break;
      default:
        break;
    }

    return (
      <>
        {loaded ? (
          <div className="list">
            <FilterFab setFilter={this.setFilter} />
            <header className="search-header">
              <TextField
                placeholder="Search"
                type="search"
                fullWidth
                InputProps={{
                  className: classes.input,
                  endAdornment: (
                    <IconButton
                      onClick={() => this.onSearchChange()}
                      size="small"
                    >
                      {searchfield !== "" && (
                        <ClearIcon style={{ color: "var(--txt2)" }} />
                      )}
                    </IconButton>
                  )
                }}
                className={classes.root}
                onChange={e => this.onSearchChange(e)}
                value={searchfield}
              />
            </header>
            {modal && (
              <SpellCard
                spell={selected}
                open={modal}
                close={this.closeModal}
                trans={Transition}
              />
            )}
            {filter === "spells" &&
              filteredSpells.map(spell => (
                <Paper
                  elevation={5}
                  className="list-paper"
                  onClick={() => this.openModal(spell)}
                  key={spell.name}
                >
                  {spell.name}
                </Paper>
              ))}

            {filter === "class" &&
              classList.map(c => (
                <ExpPanel
                  key={c}
                  name={c}
                  spells={filteredSpells[c]}
                  onClick={this.openModal}
                />
              ))}

            {filter === "school" &&
              schoolList.map(s => (
                <ExpPanel
                  key={s}
                  name={s}
                  spells={filteredSpells[s]}
                  onClick={this.openModal}
                />
              ))}

            {filter === "level" &&
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(l => (
                <ExpPanel
                  key={l}
                  name={l === 0 ? "Cantrips" : `Level ${l}`}
                  spells={filteredSpells[l]}
                  onClick={this.openModal}
                />
              ))}
          </div>
        ) : (
          <div className="wait">
            <img src={D20} alt="" className="d20" />
          </div>
        )}
      </>
    );
  }
}

export default withStyles(styles)(Search);
