import React, { Component } from "react";
import "./App.css";

import BottomNav from "./components/ui/BottomNav";
import Character from "./pages/Character";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      page: "character"
    };
  }

  onChange = selected => {
    console.info("App > ", selected);
    this.setState({ page: selected });
  };

  render() {
    console.info(this.state.page);
    return (
      <div className="App">
        <main className="Main">
          <Character />
        </main>
        <BottomNav onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
