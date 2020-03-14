import React, { Component } from "react";

import { sortByLevel } from "../utils/lib";

import SpellModal from "../components/ui/SpellModal";
import SpellCard from "../components/ui/SpellCard";

import Slide from "@material-ui/core/Slide";
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

class Favs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: this.props.spells,
      selected: null,
      modal: false,
      filter: "spells",
      spellsByLevel: {}
    };
  }

  componentDidMount = async () => {
    const { spells } = this.state;
    let spellsByLevel = {};

    const initialSort = await sortByLevel(spells);

    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map(num => {
      if (initialSort[num].length > 0) {
        spellsByLevel[num] = initialSort[num];
      }
      return null;
    });

    this.setState({ spellsByLevel });
  };

  openModal = async spell => {
    this.setState({ modal: true, selected: spell });
  };

  closeModal = () => {
    this.setState({ modal: false, selected: null });
  };

  render() {
    const { modal, selected } = this.state;
    const { spellsByLevel } = this.state;
    const { del } = this.props;
    const keys = Object.keys(spellsByLevel);

    return (
      <div className="list">
        <div className="list-body">
          {modal && (
            <SpellModal
              spell={selected}
              open={modal}
              close={this.closeModal}
              trans={Transition}
              del={del}
            />
          )}

          {keys.map(lvl => {
            const title = lvl === "0" ? `Cantrips` : `Level ${lvl}`;
            return (
              <React.Fragment key={lvl}>
                <div className="text-divider">{title}</div>
                {spellsByLevel[lvl].map(spell => (
                  <SpellCard
                    key={spell.name}
                    spell={spell}
                    openModal={() => this.openModal(spell)}
                  />
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Favs);
