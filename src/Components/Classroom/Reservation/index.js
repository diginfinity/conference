import React from "react";
import StepOne from "./StepOne";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import "./style.scss";

const ClassReservation = ({ closeClassModal }) => {
  return (
    <div className="class--reservation">
      <div className="class--reservation--container">
        <div className="class--reservation--container--close">
          <span onClick={closeClassModal}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </div>
        <StepOne />
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
