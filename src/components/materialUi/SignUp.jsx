import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>SignUp</h1>
          <Input
            placeholder="Enter Your Name"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your Email"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your UserName"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your Password"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your Confirm Password"
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
