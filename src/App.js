import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles"; // v1.x
// import MuiThemeProvider from "material-ui/core/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import "./App.css";

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">{this.props.children}</div>
      </MuiThemeProvider>
    );
  }
}

export default App;
