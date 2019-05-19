import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class StateCheck extends Component {
  constructor() {
    super();
    this.changeName = this.changeName.bind(this);
    this.state = { name: "Mathangan", age: "23", email: "mathangan@gmail.com" };
  }

  changeName() {
    this.setState({
      name: "Hari",
      age: "29",
      email: "ofc23hari@gmail.com"
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <br />
        <h3>{this.state.age}</h3>
        <br />
        <h3>{this.state.email}</h3>
        <br />
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
