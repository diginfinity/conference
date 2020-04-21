import React, { useState } from 'react';
import Modal from '../Modal';
import ReservationBtn from './Reservation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';

import '../../styles/helpers.scss';

const Navigation = () => {
  const [reservationButton, setReservationButton] = useState(false);
  const closeModal = () => setReservationButton(false);

  return (
    <div className="uk-padding-small uk-flex uk-flex-between uk-flex-middle">
      <div className="uk-flex uk-flex-left uk-flex-middle">
        <div className="uk-background-muted uk-padding-small uk-border-circle">
          <FontAwesomeIcon icon={faGripLines} />
        </div>
        
        <div className="uk-margin-left logo-line-height">
          <p className="uk-margin-remove uk-text-bold">digital</p>
          <p className="uk-margin-remove uk-text-bold">infinity.</p>
          <p className="uk-text-danger uk-margin-remove uk-text-bold">conference</p>
        </div>
      </div>

      <div className="nav-followus">
        <h4>Follow us - Fb. / In. Tw. / Inst.</h4>
      </div>

      <div>
        <button
          className="uk-button uk-button-secondary uk-button-small uk-text-capitalize uk-border-rounded"
          onClick={() => setReservationButton(true)}>
          Rezervišite!
        </button>
      </div>


      {reservationButton && (
        <Modal id="modal-button">
          <ReservationBtn closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default Navigation;
