import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import logo from "../assets/main_logo.JPG";
import logo_bg from "../assets/logo-bg.jpg";

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <>
      <nav id="id1">
        <NavLink className="navbar-brand navbar-logo" to="" exact></NavLink>

        <div className="main">
          <button
            className="btn"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i className="fa fa-sign-in"></i> Sign In
          </button>
          <button
            className="btn"
            data-toggle="modal"
            data-target="#exampleModal1"
          >
            <i className="fa fa-user-plus"></i> Register
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Sign In
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group row">
                      <label for="staticEmail" class="col-sm-2 col-form-label">
                        Email
                      </label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Valid Email address"
                        />
                      </div>
                    </div>
                    <br />
                    <div class="form-group row">
                      <label
                        for="inputPassword"
                        class="col-sm-2 col-form-label"
                      >
                        Password
                      </label>
                      <div class="col-sm-10">
                        <input
                          type="password"
                          class="form-control"
                          id="inputPassword"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div
                  class="modal-header"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  <h5 class="modal-title" id="exampleModalLabel">
                    Registration
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div>
                    <form>
                      <div class="col-md-12" style={{ padding: "5px" }}>
                        <div class="form-group">
                          <div class="col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12" style={{ padding: "5px" }}>
                        <div class="form-group">
                          <div class="col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Mobile"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12" style={{ padding: "5px" }}>
                        <div class="form-group">
                          <div class="col-sm-12">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12" style={{ padding: "5px" }}>
                        <div class="form-group">
                          <div class="col-sm-12">
                            <div class="radio">
                              <p>
                                <strong>Gender:</strong>
                              </p>
                              <label
                                style={{
                                  whiteSpace: "nowrap",
                                  marginRight: "20px",
                                }}
                              >
                                <input
                                  type="radio"
                                  name="gender"
                                  value="male"
                                />
                                Male
                                <br />
                              </label>
                              <label
                                style={{
                                  whiteSpace: "nowrap",
                                  marginRight: "20px",
                                }}
                              >
                                <input
                                  type="radio"
                                  name="gender"
                                  value="female"
                                />
                                Female
                                <br />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12" style={{ padding: "5px" }}>
                        <div class="form-group">
                          <div class="col-sm-12">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12" style={{ padding: "5px" }}>
                        <div class="form-group">
                          <div class="col-sm-12">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Confirm Password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12" style={{ padding: "5px" }}>
                        <button
                          type="button"
                          class="btn btn-default"
                          style={{ backgroundColor: "blue" }}
                        >
                          <i class="fa fa-times"></i>&nbsp;Cancel
                        </button>
                        <button type="button" class="btn btn-primary">
                          <i class="fa fa-pencil"></i>&nbsp;Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div
                  class="modal-header"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  <h5 class="modal-title" id="exampleModalLabel">
                    Booking Details For Your Route
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="farelist"
                        style={{
                          border: "2px solid orange",
                          backgroundColor: "#f8ebce",
                          borderRadius: "6px",
                          padding: "15px",
                          margin: "5px",
                        }}
                      >
                        <h4 class="header">Booking Details</h4>
                        <hr />
                        <div class="fare-row">
                          <div class="label">From</div>
                          <div class="label2">Jamna Nagar</div>
                        </div>
                        <p>
                          <div class="label">To</div>
                          <div class="label2">Chikuvadi</div>
                        </p>
                        <p>
                          <div class="label">Adult Fare</div>
                          <div class="label2">₹ 9</div>
                        </p>
                        <p>
                          <div class="label">Child Fare</div>
                          <div class="label2">₹ 44</div>
                        </p>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="select_size-pasangers">
                        <h4>
                          <span>Booking Options</span>
                        </h4>
                      </div>
                    </div>

                    <form>
                      <div class="col-md-12">
                        <label
                          class="radio-inline"
                          style={{
                            whiteSpace: "nowrap",
                            marginRight: "20px",
                          }}
                        >
                          <input
                            type="radio"
                            id="r11"
                            name="group"
                            value="adult"
                            style={{ width: "auto" }}
                          />
                          Adult
                        </label>
                        <label
                          class="radio-inline"
                          style={{
                            whiteSpace: "nowrap",
                            marginRight: "20px",
                          }}
                        >
                          <input
                            type="radio"
                            id="r12"
                            name="group"
                            value="child"
                            style={{ width: "auto" }}
                          />
                          Child
                        </label>
                        <button type="submit" class="btn btn-primary">
                          Book Ticket
                        </button>
                        <p>
                          Total Price To Be Paid :<span class="price">₹45</span>
                        </p>
                        <div class="alert alert-danger">
                          <strong>*</strong> Luggage more than
                          <strong>5 Kgs</strong> will be charged at the station.
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="modal-footer" style={{ padding: "10px" }}>
                  <div class="text-right small">
                    Powered By Gujarat Municiple Corporation
                  </div>
                </div>
                <div id="dynamic_render"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-yellow-200 w-full h-32">
        <div className="flex flex-row w-full h-32">
          <img src={logo} className="w-7/12 h-32"></img>
          <img src={logo_bg} className="w-3/5 h-32"></img>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <button
          className="navbar-toggler"
          onClick={function () {
            setTimeout(function () {
              animation();
            });
          }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i className="fa fa-home"></i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i className="fa fa-address-card"></i>About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/plan" exact>
                <i className="fas fa-ticket-alt"></i>Plan ticket
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/timetable"  href="https://drive.google.com/file/d/1A9WL0HpDC4XckPdjhD5WID75dVB6cDV4/view?usp=sharing" exact download>
                <i className="far fa-chart-bar"></i>Time-Table
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/farechart" exact>
                <i className="far fa-chart-bar"></i>Fare Chart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i className="fas fa-tty"></i>Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      
    </>
  );
};
export default Navbar;
