import React, { Component } from "react";
import "../style/projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <h1 className="display-3 text-right">Projects</h1>
        <hr />
        <br />
        <div className="row">
        <div className="col-md-6">
            <a href="https://giftv.herokuapp.com">
              <img
                className="rounded project-image border"
                src="./img/giftvthumb.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-6">
          <div>
            <h3>gifTV</h3>
            <span class="badge badge-pill badge-success">React</span>
            <span class="badge badge-pill badge-warning">node.js</span>
            <span class="badge badge-pill badge-warning">express</span>
            <span class="badge badge-pill badge-secondary">heroku</span>
            <span class="badge badge-pill badge-secondary">Reddit API</span>
            </div>
            <hr />
            <p>
              gifTV is a small application I built to create a single page
              expirience for browsing gif related subreddits.
              <br />
              Quick Facts:
              <ul>
                <li>Single Page Applicaion</li>
                <li>Built in React with node.js</li>

                <li>Connects to reddit API</li>
                <li>Hosted on heroku</li>
              </ul>
            </p>
            <a
              href="https://github.com/LincolnBartlett/giftv"
              className="btn btn-outline-primary float-right"
            >
              View on github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
