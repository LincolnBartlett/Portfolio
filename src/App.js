import React, { Component } from "react";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <Skills />
              <br />
              <br />
              <Projects />
              <br />
              <br />
              <Resume />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
