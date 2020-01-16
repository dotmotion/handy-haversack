import React, { Component } from "react";
import axios from "axios";

import SpellCard from "../components/ui/SpellCard";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    "& label.Mui-focused": {
      color: "#fff"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff"
    }
  },
  input: {
    color: "white",
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
      spells: [],
      selected: null,
      modal: false,
      searchfield: "",
      api: "http://www.dnd5eapi.co"
    };
  }

  componentWillMount = async () => {
    const res = await this.request("/api/spells");
    this.setState({ spells: res.results });
  };

  request = async url => {
    const { api } = this.state;
    const res = await axios.get(`${api}${url}`);
    return res.data;
  };

  openModal = async spell => {
    const res = await this.request(spell.url);
    this.setState({ modal: true, selected: res });
  };

  closeModal = () => {
    this.setState({ modal: false, selected: null });
  };

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { spells, modal, selected } = this.state;
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
            marginTop: 10
          }}
        >
          <TextField
            placeholder="Search"
            type="search"
            InputProps={{
              className: classes.input
            }}
            className={classes.root}
            onChange={e => this.onSearchChange(e)}
          />
        </header>
        {modal && (
          <SpellCard spell={selected} open={modal} close={this.closeModal} />
        )}
        {filteredSpells.map(spell => (
          <Paper
            elevation={5}
            className="paper"
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
