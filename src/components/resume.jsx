import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import profilePic from "../img/user-photo-sq.jpg";

class Resume extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <header className="page-header">
            <div className="container">
              <div className="row no-gutters align-items-center">
                <div className="col-sm col-9">
                  {/* <img className="user-image" src={profilePic} /> */}
                  <Link to="/" className="logo slide-horizontal" data-splitting>
                    Christian Monteverde
                  </Link>
                </div>
                {/* <div className="col-sm col-3 text-right">
                  <div className="header-nav-toggler">
                    <div className="menu-btn">
                      <div className="line-menu half start"></div>
                      <div className="line-menu"></div>
                      <div className="line-menu half end"></div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </header>

          <div className="page-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="page-content">
                    <div className="row">
                      <div className="col-md-12">
                        <h2
                          className="section-heading"
                          style={{ color: "color:#f2c44c" }}
                        >
                          <span>1/</span>Objective
                        </h2>

                        <div className="education-info">
                          <div className="eduacation-info-item">
                            <div className="row">
                              <div>
                                <p>
                                  To obtain a position that provides ample
                                  oppotunity to utilize the skills that I have
                                  acquired as a computer science student.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="divider"></div>
                      </div>
                      <div className="col-md-12">
                        <h2
                          className="section-heading"
                          style={{ color: "#33d06c" }}
                        >
                          <span>2/</span>Education
                        </h2>

                        <div className="education-info">
                          <div className="eduacation-info-item">
                            <div className="row">
                              <div className="col-md-4">
                                <h4 className="education-designation">
                                  University of Central Florida
                                </h4>
                                <p>Bachelor of Science in Computer Science</p>

                                <p>August 2015 - December 2019</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="divider"></div>
                      </div>

                      <div className="col-lg-7 col-md-12 mt-90 mt-lg-0">
                        <h2
                          className="section-heading"
                          style={{ color: "#6e80e3" }}
                        >
                          <span>3/</span>Skills
                        </h2>

                        <div className="skills">
                          <div className="skill-item">
                            <div className="skill-info">
                              <p className="skill-text">
                                React.js, HTML, & CSS
                              </p>
                            </div>
                          </div>

                          <div className="skill-item">
                            <div className="skill-info">
                              <p className="skill-text">JavaScript</p>
                            </div>
                          </div>

                          <div className="skill-item">
                            <div className="skill-info">
                              <p className="skill-text">Java, C, Python</p>
                            </div>
                          </div>

                          <div className="skill-item">
                            <div className="skill-info">
                              <p className="skill-text">Git version control</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="divider"></div>
                      </div>

                      <div className="col-md-12">
                        <footer>
                          <div className="footer-top text-center">
                            <h2>ChristianMonteverde95@gmail.com</h2>
                            <p>2154 Montpeliar</p>
                            <p>Weston FL, 33326</p>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="progress-wrap">
            <svg
              className="progress-circle svg-content"
              width="100%"
              height="100%"
              viewBox="-1 -1 102 102"
            >
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>

          <script src="js/jquery-v1.12.4.min.js"></script>
          <script src="js/plugins.js"></script>
          <script src="js/main.js"></script>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
