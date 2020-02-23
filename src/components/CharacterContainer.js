import React, { Component } from "react";
import Character from "../pages/Character";

export default class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Character"
    };
  }

  onChange = selected => {
    this.setState({ page: selected });
  };

  render() {
    return (
      <>
        <div className="container">
          <Character />
        </div>
      </>
    );
  }
}
