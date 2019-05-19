import React, { Component } from "react";

export default class EventHandle extends Component {
  constructor() {
    super();
    this.state = {
      person: { name: "", city: "" }
    };
  }

  componentDidMount() {
    this.setState({
      person: { name: "Mathan", city: "Jaffna" }
    });
  }

  componentDidUpdate() {
    console.log("component has been updates");
    console.table(this.state);
  }

  render() {
    return (
      <div>
        <p>{this.state.person}</p>
        <p>Name : {this.state.person.name}</p>
        <p>City : {this.state.person.city}</p>
      </div>
    );
  }
}
