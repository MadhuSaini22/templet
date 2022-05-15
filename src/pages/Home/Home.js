/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import img1 from "../../assets/one.jpg";
// import {img2} from "../../assets/banner_02"
import img3 from "../../assets/two.jpg";
import img2 from "../../assets/three.jpg";
const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* <h1 className="text-center" style={{ paddingTop: "30%" }}>
        Home
      </h1> */}
      

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img3} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="carousel-item">
        <img src="..." alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
          <p>...</p>
        </div>
      </div>
      <div class="flex flex-row">
        <div className="mt-4 ml-4 w-full mr-4">
          <div className="mt-3 ml-2 font-serif text-4xl text-gray-600  ">
          <p>
            Welcome to Smart BRT System Limited
          </p>
          </div>
          <div className="w-full tracking-wide ml-2 text-justify font-sans text-lg text-gray-600 font-normal leading-9 relative">
          <p>
            The BRTS Cell is responsible for development and operation of Bus Rapid Transit System. In Order to provide faster,&nbsp; reliable,&nbsp; eco friendly and advanced Public Transportation Smart BRT System Ltd is committed to operate and run BRTS services for the citizen of Gujarat. Smart BRT System Ltd is responsible to operate buses,&nbsp; to decide,&nbsp;to maintain bus shelters and smart BRT System Ltd also gets advertisement rights across BRTS route and provides e-ticket facilities and for moneycard entry and exit facilities.
          </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#20055f",
            color: "white",
            width: "30%",
            padding: "20px",
            // height:"240px",
            margin: "36px 24px",
            borderRadius: "7px",
          }}
        >
          <h1
            style={{
              fontSize: "25px",
              border: "1px solid ",
              borderRadius: "20px",
              padding: "5px",
              margin: "5px",
            }}
          >
            <i class="fa fa-exclamation-circle"></i> <span className="mt-3">What's New</span>
          </h1>

          <div>
            <marquee direction="up" scrolldelay="150" style={{ height: "200px" }}>
              <p>
                <a
                  href=""
                  target="_blank"
                  class="text-yellow-500 font-semibold"
                >
                  Click here
                </a>
                &nbsp;to download GHG emission details
              </p>
              <p>
                <a
                  href=""
                  target="_blank"
                  class="text-yellow-500 font-semibold"
                >
                  Click here
                </a>
                &nbsp;to download Student Pass (Pass Issuance & Renewal)
              </p>
              <p>
                <a
                  href=""
                  target="_blank"
                  class="text-yellow-500 font-semibold"
                >
                  Click here
                </a>
                &nbsp;to download Blind/Handicap_Form (Pass Issuance & Renewal)
              </p>
              <p>
                <a
                  href=""
                  target="_blank"
                  class="text-yellow-500 font-semibold"
                >
                  Click here
                </a>
                &nbsp;to download Senior Citizen Application Form (Pass Issuance &
                Renewal)
              </p>
              <p>
                <a
                  href=""
                  target="_blank"
                  class="text-yellow-500 font-semibold"
                >
                  Click here
                </a>
                &nbsp;to download Monthly/Quarterly Pass (Pass Issuance & Renewal)
              </p>
              <p>
                <a
                  href=""
                  target="_blank"
                  class="text-yellow-500 font-semibold"
                >
                  Click here
                </a>
                &nbsp;to download Sportsman Pass Form
              </p>
            </marquee>
          </div>
        </div>
      </div>
         </div>
  );
};
export default Home;
