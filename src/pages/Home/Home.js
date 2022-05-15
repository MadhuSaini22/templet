import React from "react";
import img1 from "../../assets/one.jpg";
import img3 from "../../assets/two.jpg";
import img2 from "../../assets/three.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="main"style={{ width: "100%" }}>   
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
            maxHeight:"20rem",
            width: "30%",
            padding: "2.0rem",
            // height:"240px",
            margin: "3.6rem 2.4rem",
            borderRadius: ".7rem",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              border: ".1rem solid ",
              borderRadius: "2.0rem",
              padding: ".5rem",
              margin: ".5rem",
              marginBottom:"1.5rem"
            }}
          >
            <i class="fa fa-exclamation-circle"></i> <span className="mt-3">What's New</span>
          </h1>

          <div>
            <marquee direction="up" scrolldelay="150" style={{ maxHeight: "10rem" }}>
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
