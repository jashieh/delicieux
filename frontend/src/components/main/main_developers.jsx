import React from "react";
import Kelly from "../stylesheets/assets/kelly.jpeg";
import Justin from "../stylesheets/assets/justin.jpg";
import Yuci from "../stylesheets/assets/yuci.jpg";
import Youngjun from "../stylesheets/assets/yuci.jpg";
import Last from '../stylesheets/assets/last.jpeg'
import LinkedIn from '../stylesheets/assets/linkedin.png'
import GitHub from '../stylesheets/assets/github-sign.png'
import Profile from '../stylesheets/assets/user.png'
import Angel from '../stylesheets/assets/angel.png'


class MainDevelopers extends React.Component {
  render() {
    return (
      <div>
        <div className="img-container">
          <img src={Last} className="splash-image" alt=""/>
        </div>
        <div className="main-developers">
          <div className="dev-top">
            <div className="main-developer">
              <div className="dev-left">
                <div className="dev-image">
                  <img className="main-developer-image" src={Justin} alt=""/>
                </div>
                <div className="main-developer-name">Justin Shieh</div>
              </div>
              <div className="dev-right">
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={LinkedIn} alt="" />
                  </div>
                  <a href="https://www.linkedin.com/in/shieh-justin/" className="main-developer-link">LinkedIn</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={GitHub} alt="" />
                  </div>
                  <a href="https://github.com/jashieh/" className="main-developer-link">GitHub</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={Profile} alt="" />
                  </div>
                  <a href="https://github.com/yshen901" className="main-developer-link">Profile</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={Angel} alt="" />
                  </div>
                  <a href="https://angel.co/justin-shieh-1" className="main-developer-link">AngelList</a>
                </div>
              </div>
            </div>
            <div className="main-developer">
              <div className="dev-left">
                <div className="dev-image">
                  <img className="main-developer-image" src={Kelly} />
                </div>
                <div className="main-developer-name">Kelly Ku</div>
              </div>
              <div className="dev-right">
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={LinkedIn} alt="" />
                  </div>
                  <a href="https://www.linkedin.com/in/kelly-ku-642b49130/" className="main-developer-link">LinkedIn</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={GitHub} alt="" />
                  </div>
                  <a href="https://github.com/kellyk525" className="main-developer-link">GitHub</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={Profile} alt="" />
                  </div>
                  <a href="https://github.com/yshen901" className="main-developer-link">Profile</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={Angel} alt="" />
                  </div>
                  <a href="https://github.com/yshen901" className="main-developer-link">AngelList</a>
                </div>
              </div>
            </div>
          </div>
          <div className="dev-top">
            <div className="main-developer">
              <div className="dev-left">
                <div className="dev-image">
                  <img className="main-developer-image" src={Yuci} />
                </div>
                <div className="main-developer-name">Yuci Shen</div>
              </div>
              <div className="dev-right">
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={LinkedIn} alt=""/>
                  </div>
                  <a href="https://www.linkedin.com/in/yucishen/" className="main-developer-link">LinkedIn</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={GitHub} alt="" />
                  </div>
                  <a href="https://github.com/yshen901" className="main-developer-link">GitHub</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={Profile} alt="" />
                  </div>
                  <a href="https://github.com/yshen901" className="main-developer-link">Profile</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={Angel} alt="" />
                  </div>
                  <a href="https://github.com/yshen901" className="main-developer-link">AngelList</a>
                </div>
              </div>
            </div>
            <div className="main-developer">
              <div className="dev-left">
                <div className="dev-image">
                  <img className="main-developer-image" src={Youngjun} />
                </div>
                <div className="main-developer-name">Youngjun Na</div>
              </div>
              <div className="dev-right">
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={LinkedIn} alt="" />
                  </div>
                  <a href="https://www.linkedin.com/in/youngjun-na-93a3606a/" className="main-developer-link">LinkedIn</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={GitHub} alt="" />
                  </div>
                  <a href="https://github.com/youngjun-na" className="main-developer-link">GitHub</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={Profile} alt="" />
                  </div>
                  <a href="https://github.com/yshen901" className="main-developer-link">Profile</a>
                </div>
                <div className="dev-link">
                  <div className="dev-logo">
                    <img src={Angel} alt="" />
                  </div>
                  <a href="https://github.com/yshen901" className="main-developer-link">AngelList</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDevelopers;