import React, { useState } from "react";
import Select from "react-select";

const Plan = () => {
  // const [selected, setSelected] = useState(route.label);





  // const handler= e => {
  //   setSelected(e.value);
  //   console.log(selected);
  // }


  var route = [
    {
      value: 1,
      label: "Kharwar Nagar",
      to: "Magdalla",
      fare: 20,
    },
    {
      value: 2,
      label: "Amazia",
      to: "Parvat Patia",
      fare: 5,
    },
    {
      value: 3,
      label: "Jamna Nagar",
      to: "Safal Square",
      fare: 12,
    },
    {
      value: 4,
      label: "Maharana Pratap Bridge",
      to: "University",
      fare: 25,
    },
    {
      value: 5,
      label: "Chikuvadi",
      to: "Puna Patia",
      fare: 15,
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://user-images.githubusercontent.com/81684710/167236932-294f7178-4008-4a97-91ad-00a211eabdf7.jpg')",
          backgroundSize: "100% 50%",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "300px",
          opacity: "0.9",
          padding: "30px 10px 10px 30px",
          justifyContent: "center",
        }}
      >
        <div>
          <div style={{ width: "25%" }}>
            <Select options={route} placeholder="Search Source..."  />
          </div>
          <br />
          {/* <h1>{selected}</h1> */}

          <div style={{ width: "25%" }}>
            <Select options={route} placeholder="Search Destination..." />
          </div>

          {/*            
            <select
              id="locality-dropdown1"
              name="locality"
              style={{
                border: "2px solid grey",
                borderRadius: "3px",
                width: "15%",
                height: "37px",
              }}
            ></select> */}
          <br />
          <br />

          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModal2"
            data-whatever="@mdo"
            style={{
              borderRadius: "20px",
              border: "2px solid Brown",
              backgroundColor: "Brown",
              padding: "5px",
              color: "white",
              width: "15%",
            }}
          >
            Plan Your Journey
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#20055f",
          height: "40px",
          width: "100%",
          color: "#20055f",
        }}
      >
        d
      </div>

      <div
        class="col-md-8 col-md-offset-2"
        style={{
          borderRadius: "20px",
          backgroundColor: "grey",
          width: "100%",
          height: "150px",
          paddingTop: "25px",
        }}
      >
        <div
          class="col-md-12 plan-failure-box"
          style={{
            borderRadius: "20px",
            backgroundColor: "white",
            width: "80%",
            height: "100px",
            textAlign: "center",
            paddingTop: "40px",
            marginLeft: "150px",
          }}
        >
          <p>
            <span style={{ color: "#fd0026" }}>
              Please enter the journey start and destination names to view the
              available route options .
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Plan;
