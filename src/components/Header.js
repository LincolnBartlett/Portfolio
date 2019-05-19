import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import github from "@fortawesome/fontawesome-free-brands/faGithub";
import linkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import envelope from "@fortawesome/fontawesome-free-solid/faEnvelope";
import code from "@fortawesome/fontawesome-free-solid/faCode";


import "../style/header.css";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <br/>
        <img
          className="img-thumbnail rounded-circle main-image mx-auto d-block"
          src="./img/lincoln.png"
          alt=""
        />
        <h1>
          Lincoln <FontAwesomeIcon icon={code} /> Bartlett
        </h1>
        <h3>Computer Information Science Student</h3>
        <p>lincolnbartlett@gmail.com</p>        
        <ul className="list-inline">
          <li className="list-inline-item">
            <h3>
              <a href="https://github.com/LincolnBartlett">
                <FontAwesomeIcon icon={github} />
              </a>
            </h3>
          </li>
          <li className="list-inline-item">
          
          </li>
          <li className="list-inline-item">
            <h3>
              <a href="https://www.linkedin.com/in/lincoln-bartlett-29065a140/">
                <FontAwesomeIcon icon={linkedin} />
              </a>
            </h3>
          </li>
          <li className="list-inline-item">
          
          </li>
          <li className="list-inline-item">
            <h3>
              <a href="mailto:lincolnbartlett@gmail.com">
                <FontAwesomeIcon icon={envelope} />
              </a>
            </h3>
          </li>
        </ul>
        <br/>
      </div>
    );
  }
}

export default Header;
