import React from "react";

const Skills = props => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5>Languages</h5>
          <hr />
          <ul className="list-inline">
          <li className="list-inline-item">C++</li>
            <li className="list-inline-item">C#</li>
            <li className="list-inline-item">Javascript</li>
            <li className="list-inline-item">CSS</li>
            <li className="list-inline-item">HTML 5</li>
          </ul>
        </div>
        <div className="col">
          <h5>Frameworks</h5>
          <hr />
          <ul className="list-inline">
            <li className="list-inline-item">Node.js</li>
            <li className="list-inline-item">React</li>
            <li className="list-inline-item">Redux</li>
            <li className="list-inline-item">Express</li>
            <li className="list-inline-item">Mongoose</li>
            <li className="list-inline-item">Passport</li>
            <li className="list-inline-item">socket.io</li>
            <li className="list-inline-item">oAuth</li>
            <li className="list-inline-item">jQuery</li>
            <li className="list-inline-item">Bootstrap</li>
          </ul>
        </div>

        <div className="col">
          <h5>Databases/Systems</h5>
          <hr />
          <ul className="list-inline">
            <li className="list-inline-item">mongoDb</li>
            <li className="list-inline-item">MySQL</li>
            <li className="list-inline-item">Git</li>
            <li className="list-inline-item">GitHub</li>
            <li className="list-inline-item">AWS</li>
            <li className="list-inline-item">Heroku</li>
            <li className="list-inline-item">Firebase</li>
            <li className="list-inline-item">Debain Linux</li>
            <li className="list-inline-item">Windows</li>
            <li className="list-inline-item">VMware ESXi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
