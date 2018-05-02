import React, { Component } from "react";
import "../style/projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <h1 className="display-3 text-right">Projects</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <a href="http://www.courter.io">
              <img
                className="rounded project-image border"
                src="./img/courterthumb.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-6">
            <h3>courter.io</h3>
            <span class="badge badge-pill badge-success">React</span>
            <span class="badge badge-pill badge-success">Redux</span>
            <span class="badge badge-pill badge-success">socket.io</span>
            <span class="badge badge-pill badge-warning">node.js</span>
            <span class="badge badge-pill badge-warning">express</span>
            <span class="badge badge-pill badge-warning">mongoDB</span>
            <span class="badge badge-pill badge-warning">oAuth2</span>
            <span class="badge badge-pill badge-secondary">AWS</span>
            <span class="badge badge-pill badge-secondary">Google API</span>
            <hr />
            <p>
              Courter.io is a dating app aimed at bringing people with common
              interests together. Instead of browsing through pictures you
              browse through icebreakers to connect over ideas not images.
              <br />
              Quick Facts:
              <ul>
                <li>Single Page Social Media Applicaion</li>
                <li>Built in React with Redux and node.js</li>
                <li>User Authentication with oAuth2</li>
                <li>Real time chat with socket.io</li>
                <li>GeoLocation integrated with google API</li>
                <li>Hosted on AWS</li>
              </ul>
            </p>
            <a
              href="https://github.com/LincolnBartlett/courter.io"
              className="btn btn-outline-primary float-right"
            >
              View on github
            </a>
          </div>
        </div>
        <br />
        <hr />
        <br/ >
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
