import React from "react";
import StepOne from "./StepOne";

import "./style.scss";

const ConfReservation = () => {
  return (
    <div className="conf--reservation">
      <div className="conf--reservation--container">
        <StepOne/>
        <div className="reservation--container--logo">
          <p>digital</p>
          <p>infinity.</p>
          <p className="red">conference</p>
        </div>
      </div>
    </div>
  );
};

export default ConfReservation;
