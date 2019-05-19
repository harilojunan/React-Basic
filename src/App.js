import React from "react";
import "./App.css";
// import Testcomponent from "./components/test";
// import Check from "./components/check";
import SearchAppBar from "./components/materialUi/Navbar";
// import LayoutComponent from "./components/materialUi/Layout";
// import FormMaterial from "./components/materialUi/FormFinal";
// import States from "./components//concepts/States";
// import StateCheck from "./components/concepts/StateCheck";
import EventHandle from "./components/concepts/StateDidMount";

function App() {
  return (
    <div align="center">
      {/* <h1>this is my first react</h1>
      <Testcomponent />
      <Check /> */}
      <SearchAppBar />
      <br />
      <EventHandle />
      {/* <br />
      <StateCheck />
      <br />
      <States /> */}
      {/* <br />
      <FormMaterial />
      <br />
      <LayoutComponent /> */}
    </div>
  );
}

export default App;
