import React from "react";
import Select from "react-select";
const Plan = () => {
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
  // let dropdown = document.getElementById("locality-dropdown");
  // dropdown.length = 0;

  // let defaultOption = document.createElement("option");
  // defaultOption.text = "Choose Path";

  // dropdown.add(defaultOption);
  // dropdown.selectedIndex = 0;

  // const url = "http://localhost:5000/routes";

  // fetch(url)
  //   .then(function (response) {
  //     if (response.status !== 200) {
  //       console.warn(
  //         "Looks like there was a problem. Status Code: " + response.status
  //       );
  //       return;
  //     }

  //     // Examine the text in the response
  //     response.json().then(function (data) {
  //       let option;

  //       for (let i = 0; i < data.length; i++) {
  //         option = document.createElement("option");
  //         option.text = data[i].from;
  //         option.value = data[i].to;
  //         dropdown.add(option);
  //       }
  //     });
  //   })
  //   .catch(function (err) {
  //     console.error("Fetch Error -", err);
  //   });

  // let dropdown1 = document.getElementById("locality-dropdown1");
  // dropdown1.length = 0;

  // let defaultOption1 = document.createElement("option");
  // defaultOption1.text = "Choose Path";

  // dropdown1.add(defaultOption1);
  // dropdown1.selectedIndex = 0;

  // const url1 = "http://localhost:5000/routes";

  // fetch(url1)
  //   .then(function (response) {
  //     if (response.status !== 200) {
  //       console.warn(
  //         "Looks like there was a problem. Status Code: " + response.status
  //       );
  //       return;
  //     }

  //     // Examine the text in the response
  //     response.json().then(function (data) {
  //       let option;

  //       for (let i = 0; i < data.length; i++) {
  //         option = document.createElement("option");
  //         option.text = data[i].from;
  //         option.value = data[i].to;
  //         dropdown1.add(option);
  //       }
  //     });
  //   })
  //   .catch(function (err) {
  //     console.error("Fetch Error -", err);
  //   });

  // `const searchRoute = async (id) => {
  //   const res = await fetch(`http://localhost:5000/routes?q=${id}`, {
  //     method: "GET",
  //   });
  //   res.status === 200
  //     ? setRoutes(routes.filter((route) => route.id == id))
  //     : alert("Route not Found");
  //   document.getElementById("fname").value = res;
  // };`
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
        }}
      >
        <div style={{ padding: "10px" }}>
          <form style={{ padding: "35px" }} method="get">
            <label
              for="fname"
              style={{
                color: "white",
                backgroundColor: "grey",
                borderRadius: "3px",
                fontWeight: "bold",
                margin: "10px 0px",
                width: "100px",
                height: "35px",
                padding: "5px",
                textAlign: "center",
              }}
            >
              From
            </label>

            <div style={{ width: "25%" }}>
              <Select options={route} />
            </div>
            <p style={{ backgroundColor: "white" }}>{`You selected`}</p>

            {/* 
            <select
              id="locality-dropdown"
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
            <label
              for="lname"
              style={{
                color: "white",
                borderRadius: "3px",
                backgroundColor: "grey",
                fontWeight: "bold",
                margin: "10px 0px",
                width: "100px",
                height: "35px",
                padding: "5px",
                textAlign: "center",
              }}
            >
              To
            </label>

            <div style={{ width: "25%" }}>
              <Select options={route} />
            </div>

            <select></select>
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

            {/* <input type="text" name="search" placeholder="Search" class="form-control" id="search1"/>    
            <ui  class="list-group" id="result1"></ui>  */}
          </form>
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
    </>
  );
};

export default Plan;
