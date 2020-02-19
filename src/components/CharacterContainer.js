import React, { Component } from "react";
import Character from "../pages/Character";
import { toryc } from "../assets/db/toryc.js";

export default class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      page: "Character"
    };
  }

  UNSAFE_componentWillMount = () => {
    const token = window.localStorage.getItem("char");
    if (token) {
      const character = JSON.parse(token);
      this.setState({ character });
    } else {
      const character = toryc;
      this.setState({ character });
    }
  };

  edit = (field, change) => {
    let { character } = this.state;
    character[field] = change;
    this.setState({ character });
  };

  onChange = selected => {
    this.setState({ page: selected });
  };

  render() {
    const { character } = this.state;
    return (
      <>
        <div className="container">
          <Character char={character} edit={this.edit} />
        </div>
      </>
    );
  }
}
