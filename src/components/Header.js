import React, { Component } from "react";
import '../style/header.css'

class Header extends Component {
  render() {
    return (
      <div className="text-center jumbotron">
          <img
            className="img-thumbnail rounded-circle main-image mx-auto d-block"
            src="./img/meandpep.jpg"
            alt=""
          />
          <h1>Lincoln Bartlett</h1>
          
          <h5>full stack web developer</h5>
      </div>
    );
  }
}

export default Header;
