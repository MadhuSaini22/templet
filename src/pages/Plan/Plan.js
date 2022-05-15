import React from "react";
// import Select from "react-select";
import { useContext } from "react";
import AuthContext from "../../context/context";

const Plan = () => {
  // const [selectedSource, setSelectedSource] = useState('');
  // const [selectDestination, setSelectedDestination] = useState('');
  const {
    selectedSource,
    setSelectedSource,
    selectDestination,
    setSelectedDestination,
  } = useContext(AuthContext);

  const handlerSource = (e) => {
    // console.log(e.target.value);
    setSelectedSource(e.target.value);
  };

  const handlerDest = (e) => {
    // console.log(e.target.value);
    setSelectedDestination(e.target.value);
  };

  var route = [
    {
      value: 0,
      label: "nothing",
      to: "nothing",
      fare: 0,
    },
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
    {
      value: 6,
      label: "Model Town",
      to: "Idharwar Farm Junction",
      fare: 19
    },
    {
      value: 7,
      label: "Ongc",
      to: "Magdalla",
      fare: 5
    },
    {
      value: 8,
      label: "Someshwar Junction",
      to: "Anuwrat Dwar",
      fare: 8
    }
    ,
    {
      value: 9,
      label: "Dindoli Kharwasa",
      to: "Pandesara",
      fare: 20
    },
    {
      value: 10,
      label: "Model Town",
      to: "Parwat Patia",
      fare: 19
    },
    {
      value: 11,
      label: "Ishwar Farm Junction",
      to: "University",
      fare: 5
    },
    {
      value: 12,
      label: "Jogni Mata Chowk",
      to: "Aas Pass Mandir",
      fare: 8
    }
  ];
  console.log("source", selectedSource);
  console.log("dest", selectDestination);
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
          {/* <div style={{ width: "25%", border: "1px solid black" }}>
            <Select options={route} placeholder="Search Source..." value={selected} onChange={(e) => handler(e)} />
          </div>
          <br />
          <h1>{selected}</h1> */}

          <select
            name="route"
            id="route"
            onChange={(e) => handlerSource(e)}
            style={{
              width: "25%",
              borderRadius:"10px",
              border: "1px solid black",     
              display: "block",
              margin: "20px 0",
              padding: "5px",
            }}
          >
            {route.map((val) => {
              return (
                <>
                  {val.value === 0 ? (
                    <option value="" disabled selected hidden>
                      Choose a Source
                    </option>
                  ) : (
                    <option key={val.value} value={val.label}>
                      {val.label}
                    </option>
                  )}
                </>
              );
            })}
          </select>
          <select
            name="route"
            id="route"
            onChange={(e) => handlerDest(e)}
            style={{
              width: "25%",
              border: "1px solid black",
              borderRadius:"10px",
              display: "block",
              margin: "20px 0",
              padding: "5px",
            }}
          >
            {route.map((val) => {
              return (
                <>
                  {val.value === 0 ? (
                    <option value="" disabled selected hidden>
                      Choose a Destination
                    </option>
                  ) : (
                    <option key={val.value} value={val.label}>
                      {val.label}
                    </option>
                  )}
                </>
              );
            })}
          </select>

          {/* <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option> */}
          {/* <div style={{ width: "25%", border: "1px solid black" }}>
            <Select options={route} placeholder="Search Destination..." />
          </div> */}

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
            <span style={{ fontSize: "20px", color: "#fd0026" }}>
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
