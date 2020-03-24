import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Close from "./Close";

import "./style.scss";

const ClassReservation = () => {
  return (
    <div className="class--reservation">
      <div className="class--reservation--container">
        <StepOne />
        <StepTwo />
        <StepThree />
        <Close />
        
        <div className="reservation--container--logo">
          <p>digital</p>
          <p>infinity.</p>
          <p className="red">conference</p>
        </div>
      </div>
    </div>
  );
};

export default ClassReservation;
