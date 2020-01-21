import React, { Component } from "react";

import { spells } from "../assets/db/spells";
import { request, sortByClass, sortByLevel, sortBySchool } from "../utils/lib";

import SpellCard from "../components/ui/SpellCard";

import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import SortIcon from "@material-ui/icons/Sort";
import { IconButton } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
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

class Search extends Component {
  constructor() {
    super();
    this.state = {
      spells: spells,
      selected: null,
      modal: false,
      searchfield: "",
      spellsByClass: {},
      spellsByLevel: {},
      spellsBySchool: {}
    };
  }

  componentWillMount = async () => {
    const { spells } = this.state;

    const spellsByClass = await sortByClass(spells);
    const spellsByLevel = await sortByLevel(spells);
    const spellsBySchool = await sortBySchool(spells);

    this.setState({ spellsByClass, spellsByLevel, spellsBySchool });
  };

  openModal = async spell => {
    const res = await request(spell.url);
    this.setState({ modal: true, selected: res });
  };

  closeModal = () => {
    this.setState({ modal: false, selected: null });
  };

  onSearchChange = e => {
    this.setState({ searchfield: e ? e.target.value : "" });
  };

  render() {
    const { spells, modal, selected, searchfield } = this.state;
    const { classes } = this.props;

    const filteredSpells = spells.filter(spell => {
      return spell.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="list">
        <header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px 30px 0px 20px"
          }}
        >
          <TextField
            placeholder="Search"
            type="search"
            fullWidth
            InputProps={{
              className: classes.input,
              endAdornment: (
                <IconButton onClick={() => this.onSearchChange()} size="small">
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
          <IconButton
            onClick={() => console.log("lol")}
            size="small"
            style={{ marginLeft: 10 }}
          >
            <SortIcon style={{ color: "var(--txt2)" }} />
          </IconButton>
        </header>
        {modal && (
          <SpellCard spell={selected} open={modal} close={this.closeModal} />
        )}
        {filteredSpells.map(spell => (
          <Paper
            elevation={5}
            className="list-paper"
            onClick={() => this.openModal(spell)}
            key={spell.name}
          >
            {spell.name}
          </Paper>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Search);
