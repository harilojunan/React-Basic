import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class TStates extends Component {
  constructor() {
    super();
    this.changeName = this.changeName.bind(this);
    this.state = { name: "Mathangan" };
  }

  changeName() {
    this.setState({ name: "Hari" });
  }

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          onClick={this.changeName}
        >
          Change
        </Button>
      </div>
    );
  }
}
