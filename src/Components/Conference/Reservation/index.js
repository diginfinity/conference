import React from "react";
import StepOne from "./StepOne";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import "./style.scss";

const ConfReservation = ({ closeConfModal }) => {
  return (
    <div className="conf--reservation">
      <div className="conf--reservation--container">
        <div className="conf--reservation--container--close">
          <span onClick={closeConfModal}>
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

export default ConfReservation;
