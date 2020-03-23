import React, { useState } from 'react';
import Modal from '../Modal';
import ReservationBtn from './Reservation';

import './styles.scss';

const Navigation = () => {
  const [reservationButton, setReservationButton] = useState(false);
  const closeModal = () => setReservationButton(false);

  return (
    <div className="navigation">
      <div className="navigation--followus">
        <h4>Follow us - Fb. / In. Tw. / Inst.</h4>
      </div>
      <div className="navigation--left">
        <div className="navigation--left--menu">
          <div className="menu">
            <div className="menu--lines">
              <div className="menu--lines--line"></div>
              <div className="menu--lines--line"></div>
            </div>
          </div>
        </div>
        <div>
          <p>digital</p>
          <p>infinity.</p>
          <p className="conference--text">conference</p>
        </div>
      </div>
      <div className="navigation--right">
        <button
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