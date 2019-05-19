import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";

export default class FormMaterial extends Component {
  render() {
    return (
      <div align="center">
        <form>
          <Input
            placeholder="ID000120"
            disabled
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your Name"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your Age"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your Mobile "
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Button color="primary" variant="contained" type="submit">
            Submit Your Details
          </Button>
        </form>
      </div>
    );
  }
}
