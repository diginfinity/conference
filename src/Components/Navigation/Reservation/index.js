import React, { useState } from "react";
import Modal from '../../Modal';
import ConfReservation from '../../Conference/Reservation';
import ClassReservation from '../../Classroom/Reservation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import '../../../styles/helpers.scss';

const Reservation = ({ closeModal }) => {
  const [confReservation, setConfReservation] = useState(false);
  const closeConfModal = () => setConfReservation(false);
  const [classReservation, setClassReservation] = useState(false);
  const closeClassModal = () => setClassReservation(false);

  if (!confReservation && !classReservation) {
    return (
      <div className="uk-section uk-position-fixed background-modal uk-width-1-1 uk-height-viewport z-index-100 overflow">
        <div className="uk-container uk-margin-auto">
          <div className="uk-text-lead uk-position-top-right uk-padding">
            <span className="uk-text-danger pointer" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </span>
          </div>
          
          <div className="uk-position-center uk-text-center uk-padding text-white">
            <h1 className="text-white">Rezervacija</h1>
            <p className="uk-text-large">Konferencijska sala i/ili učionica</p>
            <div className="uk-grid uk-padding uk-child-width-1-2@m">
              <div className="uk-margin-small-top">
                <p>Konferencijska sala</p>
                <button
                  className="uk-button uk-button-danger uk-button-small uk-text-capitalize uk-border-rounded"
                  onClick={() => setConfReservation(true)}>
                  Rezervišite!
                </button>
              </div>
              <div className="uk-margin-small-top">
                <p>Učionica</p>
                <button
                  className="uk-button uk-button-danger uk-button-small uk-text-capitalize uk-border-rounded"
                  onClick={() => {setClassReservation(true);  }}>
                  Rezervišite!
                </button>
              </div>
            </div>
            <p className="uk-text-small">Ukoliko ne želite da rezervaciju popunjavate online, možete nas kontaktirati na telefon: 021 300 2956, radnim danima od 8:00h do 16:00h</p>
          </div>
          
          <div className="uk-position-bottom-left uk-padding logo-line-height text-white">
            <p className="uk-margin-remove uk-text-bold">digital</p>
            <p className="uk-margin-remove uk-text-bold">infinity.</p>
            <p className="uk-text-danger uk-margin-remove uk-text-bold">conference</p>
          </div>
        </div>
      </div>
    );
  } else if(confReservation) {
      return(
        <Modal id="modal-button">
          <ConfReservation closeConfModal={closeConfModal} />
        </Modal>
      )
  } else {
      return(
        <Modal id="modal-button">
          <ClassReservation closeClassModal={closeClassModal} />
        </Modal>
      )
  }
};

export default Reservation;
