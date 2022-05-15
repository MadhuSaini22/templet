import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ width: "100%" }}>
      <div class="footer-wrapper">
        <div class="icons">
          <ul>
            <li>
              <a href="/">
                <i class="fab fa-linkedin-in icon"></i>
              </a>
            </li>
            <li>
              <a href="/" target="github">
                {" "}
                <i class="fab fa-github icon"></i>{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fab fa-twitter icon"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fab fa-youtube icon"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p style={{ color: "cornsilk" }}>
            ©2022 Copyright BRTS Management System
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
