import React, { Component } from "react";
import axios from "axios";
import { spells } from "../assets/db/spells";

import SpellCard from "../components/ui/SpellCard";

import TextField from "@material-ui/core/TextField";
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
      api: "https://www.dnd5eapi.co"
    };
  }

  componentWillMount = async () => {
    // const res = await this.request("/api/spells");
    // this.setState({ spells: res.results });
  };

  request = async url => {
    const { api } = this.state;
    let data;
    await axios
      .get(`${api}${url}`)
      .then(res => {
        data = res.data;
      })
      .catch(e => console.error(e));
    return data;
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
            margin: "15px 30px 0px 20px"
          }}
        >
          <TextField
            placeholder="Search"
            type="search"
            fullWidth
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
