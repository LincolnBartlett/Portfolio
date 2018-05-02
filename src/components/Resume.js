import React from "react";

const Resume = props=> {

    return (
      <div>
          <h1 className="display-3 text-right">Experience</h1>
        <hr />
          <br />
        <div className="row">

          <div className="col-md-8 offset-2">
            <blockquote class="blockquote text-right">
              <p class="mb-0">Back-end Developer at Sircles</p>
              <footer class="blockquote-footer">
                December 2017 to February 2018
              </footer>
            </blockquote>

            <p>
              As the Back-end Developer at Sircles I was responsible for
              developing and maintaining the server and database for a business
              rating application. In addition to development I oversaw systems
              administration and deployment of production code.
              <br />
              - Maintained a Node.js application and a MySQL database.
              <br />
              - Installed hardware and configured it with VMware ESXi to host
              multiple development servers.
              <br />
              - Independently devised backup solutions with Bash
            </p>
            <hr />
            <blockquote class="blockquote text-right">
              <p class="mb-0">Freelance Development</p>
              <footer class="blockquote-footer">
                April 2017 to December 2017
              </footer>
            </blockquote>

            <p>
              During this time I was studying full stack web development at
              freeCodeCamp.com and building websites for friends and family.
              <br />
              - Designed and built websites using HTML, CSS, JavaScript,
              Angular, React, node.js, mongoDB.
              <br />
              - Built websites for friends and personal projects
            </p>
          </div>
        </div>
      </div>
    );

}

export default Resume;
