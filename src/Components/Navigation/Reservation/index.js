import React, { useState } from "react";
import Modal from '../../Modal';
import ConfReservation from '../../Conference/Reservation';
import ClassReservation from '../../Classroom/Reservation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import "./style.scss";

const Reservation = ({ closeModal }) => {
  const [confReservation, setConfReservation] = useState(false);
  const closeConfModal = () => setConfReservation(false);
  const [classReservation, setClassReservation] = useState(false);
  const closeClassModal = () => setClassReservation(false);

  if (!confReservation && !classReservation) {
    return (
      <div className="reservation">
        <div className="reservation--container">
          <div className="reservation--container--close">
            <span onClick={closeModal}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </span>
          </div>
          
          <div className="reservation--container--card">
            <h1>Rezervacija</h1>
            <h2>Konferencijska sala i/ili učionica</h2>
            <div className="display">
              <div className="display--item">
                <p>Konferencijska sala</p>
                <button
                  onClick={() => setConfReservation(true)}>
                  Rezervišite!
                </button>
              </div>
              <div className="display--item">
                <p>Učionica</p>
                <button
                  onClick={() => {setClassReservation(true);  }}>
                  Rezervišite!
                </button>
              </div>
            </div>
            <p className="card--footer">Ukoliko ne želite da rezervaciju popunjavate online, možete nas kontaktirati na telefon: 021 300 2956, radnim danima od 8:00h do 16:00h</p>
          </div>
          
          <div className="reservation--container--logo">
            <p>digital</p>
            <p>infinity.</p>
            <p className="red">conference</p>
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
