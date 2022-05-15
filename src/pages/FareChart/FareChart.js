import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FareChart.css";
// import data from "../../db.json";
import img from "../../assets/Inner_banner.jpg";

const FareChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/routes")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div class="inner-banner">
        <img src={img} alt="." />

      </div>
      <div style={{ marginTop: "10px" }}>
        <div class="col-md-12 col-sm-12">
          <p class="text-center font-sans text-4xl font-medium text-gray-700" >Fare Chart</p>
        </div>
      </div>
      <div
        class="col-md-12 searchform"
        style={{ padding: "10px", backgroundColor: "#e4e3e4" }}
      >
        <div class="col-md-3">
          <div class="input-group">
            <div style={{ width: "60px" }} class="input-group-addon">
              From
            </div>
            <input
              type="text"
              id="tags3"
              class="form-control"
              placeholder="Search Here"
              style={{ zIndex: " 0",marginBottom:"5px"}}
            />
          </div>

        </div>

        <div class="col-md-3">
          <div class="input-group">
            <div style={{ width: "60px" }} class="input-group-addon">
              To
            </div>
            <input
              type="text"
              id="tags4"
              class="form-control"
              placeholder="Search Here"
              style={{ zIndex: " 0" }}
            />
            {/* <img  class="planautoloader" src="/Content/images/35.gif" alt="."/> */}
          </div>

        </div>
        <div class="col-md-3">
          <button type="button" class="btn  btn-md " style={{ backgroundColor:"#20055f"}}>
            <i class="fa fa-search"></i>
          </button>
          {/* <button type="button" class="btn btn-primary btn-md">
            <i class="fa fa-trash"></i>
          </button> */}
        </div>
      </div>

      <div class="grid">
        <div class="grid-header" style={{ backgroundColor: "#305596", color: "white" }}>
          <span>Fare Matrix</span>
          <span style={{ float: "right" }}>
            * Luggage more than 5 Kgs will be charged at the station
          </span>
        </div>
      </div>

      <div style={{ marginBottom: "40px",marginTop: "40px", justifyContent: "center", alignItems: "center", marginLeft: "370px", width: "50%", padding: "10px" }}>
        <table style={{ border: "1px solid", padding: "30px" }}>
          <tr style={{ padding: "10px", margin: "40px" }}>
            <th>From </th>
            <th>To</th>
            <th>Fare</th>
          </tr>
          {
            data.map((data) => (
              <tr key={data.id}>
                <td>{data.from}</td>
                <td>{data.to}</td>
                <td>{data.fare}</td>
              </tr>
            ))
          }

        </table>
      </div>
    </div>
  );
};

export default FareChart;
