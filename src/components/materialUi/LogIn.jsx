import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";

export default class LogIn extends Component {
  render() {
    return (
      <div align="center">
        <h1>Log In</h1>
        <form>
          <Input
            placeholder="Enter Your Valid UserName"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your Valid Password"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Button type="submit" color="secondary" variant="extendedFab">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
