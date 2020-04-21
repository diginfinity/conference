import React, { useState } from 'react';
import Modal from '../Modal';
import ClassReservation from './Reservation';

import conferenceImage from '../../assets/Image 29/Image 29.png';

import './styles.scss';

function Classroom() {
  const [classReservation, setClassReservation] = useState(false);
  const closeClassModal = () => setClassReservation(false);

  return (
    <div className="classroom">
      <div className="classroom--section--1">
        <div className="classroom--content">
          <h3 className="classroom--content--title">Učionica</h3>
          <p>Raspolaže idealnim uslovima za organizaciju obuke do 13 osoba. Učionica ima centralnu klimu, podno grejanje i dnevno svetlo. Opremljena je najsavremenijom tehničkom audio/vizuelnom opremom i računarima sa monitorom. Najam učionice uključuje:</p>
          <p>+ Audio/vizuelnu opremu</p>
          <p>+ Računare</p>
          <p>+ Wi-Fi I optički internet velike brzine</p>
          <p>+ Tehničku podršku (na zahtev)</p>
          <p>+ Osoblje na recepciji (na zahtev)</p>
          <button
            className="classroom--content--button--1"
            onClick={() => setClassReservation(true)}>
            Rezervišite!
          </button>
          <button className="classroom--content--button--2">
            Galerija
          </button>
          <p><b>Preuzmite plan objekta u PDF</b></p>
        </div>
      </div>

      <div className="classroom--section--2">
        <img src={conferenceImage} alt="classroom" />
        <div className="classroom--details"></div>
      </div>

      {classReservation && (
        <Modal id="modal-button">
          <ClassReservation closeClassModal={closeClassModal} />
        </Modal>
      )}
    </div>
  );
}

export default Classroom;