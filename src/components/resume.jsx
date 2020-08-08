import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import profilePic from "../img/user-photo-sq.jpg";

class Resume extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <body>
          <header class="page-header">
            <div class="container">
              <div class="row no-gutters align-items-center">
                <div class="col-sm col-9">
                  {/* <img class="user-image" src={profilePic} /> */}
                  <Link to="/" class="logo slide-horizontal" data-splitting>
                    Christian Monteverde
                  </Link>
                </div>
                {/* <div class="col-sm col-3 text-right">
                  <div class="header-nav-toggler">
                    <div class="menu-btn">
                      <div class="line-menu half start"></div>
                      <div class="line-menu"></div>
                      <div class="line-menu half end"></div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </header>

          <div class="page-wrapper">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="page-content">
                    <div class="row">
                      <div class="col-md-12">
                        <h2
                          class="section-heading"
                          style={{ color: "color:#f2c44c" }}
                        >
                          <span>1/</span>Objective
                        </h2>

                        <div class="education-info">
                          <div class="eduacation-info-item">
                            <div class="row">
                              <div>
                                <p>
                                  To obtain a position that provides ample
                                  oppotunity to utilize the skills that I have
                                  aquired as a computer science student.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="divider"></div>
                      </div>
                      <div class="col-md-12">
                        <h2
                          class="section-heading"
                          style={{ color: "#33d06c" }}
                        >
                          <span>2/</span>Education
                        </h2>

                        <div class="education-info">
                          <div class="eduacation-info-item">
                            <div class="row">
                              <div class="col-md-4">
                                <h4 class="education-designation">
                                  University of Central Florida
                                </h4>
                                <p>Bachelor of Science in Computer Science</p>

                                <p>August 2015 - December 2019</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="divider"></div>
                      </div>

                      <div class="col-lg-7 col-md-12 mt-90 mt-lg-0">
                        <h2
                          class="section-heading"
                          style={{ color: "#6e80e3" }}
                        >
                          <span>3/</span>My Skills
                        </h2>

                        <div class="skills">
                          <div class="skill-item">
                            <div class="skill-info">
                              <p class="skill-text">React.js, HTML, & CSS</p>
                            </div>
                          </div>

                          <div class="skill-item">
                            <div class="skill-info">
                              <p class="skill-text">JavaScript</p>
                            </div>
                          </div>

                          <div class="skill-item">
                            <div class="skill-info">
                              <p class="skill-text">Java, C, Python</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="divider"></div>
                      </div>

                      <div class="col-md-12">
                        <footer>
                          <div class="footer-top text-center">
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

          <div class="progress-wrap">
            <svg
              class="progress-circle svg-content"
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
        </body>
      </React.Fragment>
    );
  }
}

export default Resume;
