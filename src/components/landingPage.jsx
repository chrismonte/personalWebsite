import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import "../css/plugins.css";
import "../css/main.css";
import "../css/responsive.css";
// import userImage from "../img/user-photo-lg.jpg";

class LandingPage extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push("/resume");
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <div className="container">
            <div className="row no-gutters align-items-center">
              <div className="col-sm col-9">
                {/* <img className="user-image" src={userImage} alt="!" /> */}
                <Link to="/" className="logo slide-horizontal" data-splitting>
                  Christian Monteverde
                </Link>
              </div>
              {/*  <div className="col-sm col-3 text-lg-right">
                <div className="social-icons d-none d-lg-inline-block">
                  <Router>
                    <Link
                      to={{
                        pathname:
                          "www.linkedin.com/in/christian-monteverde-78020a185goog",
                      }}
                    >
                      <i className="lni-linkedin-original"></i>
                    </Link>
                  </Router>
                </div>

                <div className="header-nav-toggler d-lg-none">
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

        <div className="section-standard">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <div className="d-flex align-items-center">
                  {/* <div className="nav-toggler d-none d-lg-block">
                    <div className="menu-btn">
                      <div className="line-menu half start"></div>
                      <div className="line-menu"></div>
                      <div className="line-menu half end"></div>
                    </div>
                  </div> */}

                  <div className="g-title">
                    <h4>
                      <span>Christian</span> Monteverde.
                    </h4>
                    <p className="mb-25">
                      Front-end developer
                      <br />
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={this.handleClick}
                    >
                      Get Resume
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 d-none d-lg-block">
                <div className="standard-text-holder">
                  <h5 className="mb-25">Let's work together</h5>
                  <p className="mb-10">I’m available at</p>
                  <p className="mb-1">
                    <p className="mb-10">christianmonteverde95@gmail.com</p>
                  </p>
                  <p>
                    <p className="slide-vertical" data-splitting>
                      (786) 479 3472
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="../js/jquery-v1.12.4.min.js"></script>
        <script src="../js/plugins.js"></script>
        <script src="../js/main.js"></script>
      </React.Fragment>
    );
  }
}

export default LandingPage;
