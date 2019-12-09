import React from "react";
import Kelly from "../stylesheets/assets/kelly.jpeg";
import Justin from "../stylesheets/assets/justin.jpg";
import Yuci from "../stylesheets/assets/yuci.jpg";
import Youngjun from "../stylesheets/assets/yuci.jpg";
import Last from '../stylesheets/assets/last.jpeg'


class MainDevelopers extends React.Component {
  render() {
    return (
      <div>
        <div className="img-container">
          <img src={Last} className="splash-image" />
        </div>
        <div className="main-developers">
          <div className="dev-top">
            <div className="main-developer">
              <div className="main-developer-name">Justin Shieh</div>
              <img className="main-developer-image" src={Justin} />
              <a href="https://www.linkedin.com/in/shieh-justin/" className="main-developer-link">LinkedIn</a>
              <a href="https://github.com/jashieh/" className="main-developer-link">GitHub</a>
            </div>
            <div className="main-developer">
              <div className="main-developer-name">Kelly Ku</div>
              <img className="main-developer-image" src={Kelly} />
              <a href="https://www.linkedin.com/in/kelly-ku-642b49130/" className="main-developer-link">LinkedIn</a>
              <a href="https://github.com/kellyk525" className="main-developer-link">GitHub</a>
            </div>
          </div>
          <div className="dev-top">
            <div className="main-developer">
              <div className="main-developer-name">Yuci Shen</div>
              <img className="main-developer-image" src={Yuci} />
              <a href="https://www.linkedin.com/in/yucishen/" className="main-developer-link">LinkedIn</a>
              <a href="https://github.com/yshen901" className="main-developer-link">GitHub</a>
            </div>
            <div className="main-developer">
              <div className="main-developer-name">Youngjun Na</div>
              <img className="main-developer-image" src={Youngjun} />
              <a href="https://www.linkedin.com/in/youngjun-na-93a3606a/" className="main-developer-link">LinkedIn</a>
              <a href="https://github.com/youngjun-na" className="main-developer-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDevelopers;