import React, { useState } from "react";
import StatusBar from "../components/StatusBar";
import "../styles/BasicInfo.css";

const BasicInfo = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <StatusBar />
      <div className="basic-info-body-wrapper">
        <div className="step-wrapper">
          <div className="step-bar">
            <div className="basic-info-current-step"></div>
          </div>
        </div>
        <div className="basic-info-inputs-wrapper">
          <div className="basic-info-name-wrapper">
            <h3>Name</h3>
            <input placeholder="Enter your given name"></input>
          </div>
          <div className="basic-info-age-wrapper">
            <h3>Age</h3>
            <input placeholder="Enter your age in numbers"></input>
          </div>
          <div className="basic-info-gender-wrapper">
            <h3>Gender</h3>
            <div className="gender-button-wrapper">
              <button
                className={toggle ? "gender-unselected" : "gender-selected"}
                onClick={() => setToggle(!toggle)}
              >
                Female
              </button>
              <button
                className={toggle ? "gender-selected " : "gender-unselected"}
                onClick={() => setToggle(!toggle)}
              >
                Male
              </button>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;