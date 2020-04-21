import React, { useState } from 'react';
import Modal from '../Modal';
import ClassReservation from './Reservation';

import conferenceImage from '../../assets/Image 29/Image 29.png';

import '../../styles/helpers.scss';

function Classroom() {
  const [classReservation, setClassReservation] = useState(false);
  const closeClassModal = () => setClassReservation(false);

  return (
    <div className="uk-section uk-padding-remove">
      <div className="uk-grid uk-grid-match background-pink">

        <div className="uk-width-expand">
          <div className="uk-width-3-4@m uk-padding uk-margin-auto">
            <div className="text-black">
              <h2 className="uk-text-bold uk-margin-top text-black">Učionica</h2>
              <p>Raspolaže idealnim uslovima za organizaciju obuke do 13 osoba. Učionica ima centralnu klimu, podno grejanje i dnevno svetlo. Opremljena je najsavremenijom tehničkom audio/vizuelnom opremom i računarima sa monitorom. Najam učionice uključuje:</p>
              <p>+ Audio/vizuelnu opremu</p>
              <p>+ Računare</p>
              <p>+ Wi-Fi I optički internet velike brzine</p>
              <p>+ Tehničku podršku (na zahtev)</p>
              <p>+ Osoblje na recepciji (na zahtev)</p>
              <button
                className="uk-button uk-button-danger uk-button-small uk-text-capitalize uk-border-rounded uk-margin-small-right"
                onClick={() => setClassReservation(true)}>
                Rezervišite!
              </button>
              <button className="uk-button uk-button-secondary uk-button-small uk-text-capitalize uk-border-rounded">
                Galerija
              </button>
              <p className="uk-bold">Preuzmite plan objekta u PDF</p>
            </div>
          </div>
        </div>

        <div className="uk-width-1-2@m">
          <img src={conferenceImage} alt="classroom" />
          <div className="uk-height-max-medium background-white text-black">
            <div className="uk-padding uk-margin-remove uk-align-left">Classroom details - Postavka</div>
          </div>
        </div>

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