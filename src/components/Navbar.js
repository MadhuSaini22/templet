import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";

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
        <NavLink className="navbar-brand navbar-logo" to="/" exact>
          BRTS Management System
        </NavLink>

        <div className="main">
          {/* <button className="btn">
            <i className="fa fa-sign-in"></i> Sign In
          </button>
          <button className="btn">
            <i className="fa fa-user-plus"></i> Sign Up
          </button> */}

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
            data-target="#exampleModal"
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
        </div>
      </nav>
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
              <NavLink className="nav-link" to="/moneycard" exact>
                <i className="fa fa-credit-card"></i>Money Card
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/plan" exact>
                <i className="fas fa-ticket-alt"></i>Plan ticket
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/timetable" exact>
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
