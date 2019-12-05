import React from "react";
import profile from "../stylesheets/assets/kelly.jpeg";

class MainDevelopers extends React.Component {
  render() {
    return (
      <div className="main-developers">
        <div className="main-developer">
          <div className="main-developer-name">Justin Hsieh</div>
          <img className="main-developer-image" src={profile} />
          <a href="https://www.linkedin.com/in/shieh-justin/" className="main-developer-link">LinkedIn</a>
          <a href="https://github.com/jashieh/" className="main-developer-link">GitHub</a>
        </div>
        <div className="main-developer">
          <div className="main-developer-name">Kelly Ku</div>
          <img className="main-developer-image" src={profile} />
          <a href="https://www.linkedin.com/in/kelly-ku-642b49130/" className="main-developer-link">LinkedIn</a>
          <a href="https://github.com/kellyk525" className="main-developer-link">GitHub</a>
        </div>
        <div className="main-developer">
          <div className="main-developer-name">Youngjun Na</div>
          <img className="main-developer-image" src={profile} />
          <a href="https://www.linkedin.com/in/youngjun-na-93a3606a/" className="main-developer-link">LinkedIn</a>
          <a href="https://github.com/youngjun-na" className="main-developer-link">GitHub</a>
        </div>
        <div className="main-developer">
          <div className="main-developer-name">Yuci Shen</div>
          <img className="main-developer-image" src={profile} />
          <a href="https://www.linkedin.com/in/yucishen/" className="main-developer-link">LinkedIn</a>
          <a href="https://github.com/yshen901" className="main-developer-link">GitHub</a>
        </div>
      </div>
    );
  }
}

export default MainDevelopers;