import React from "react";
import StepOne from "./StepOne";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import '../../../styles/helpers.scss';

const ConfReservation = ({ closeConfModal }) => {
  return (
    <div className="uk-section uk-position-fixed background-modal uk-width-1-1 uk-height-viewport z-index-100 overflow">
      <div className="uk-container uk-margin-auto">
        <div className="uk-text-lead uk-position-top-right uk-padding z-index-10">
          <span className="uk-text-danger pointer" onClick={closeConfModal}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </div>

        <StepOne />
        
        <div className="uk-position-bottom-left uk-padding uk-visible@m logo-line-height text-white">
          <p className="uk-margin-remove uk-text-bold">digital</p>
          <p className="uk-margin-remove uk-text-bold">infinity.</p>
          <p className="uk-text-danger uk-margin-remove uk-text-bold">conference</p>
        </div>
      </div>
    </div>
  );
};

export default ConfReservation;
