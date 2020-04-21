import React, { useState } from 'react';
import Modal from '../Modal';
import ConfReservation from './Reservation';

import conferenceImage from '../../assets/Image 28/Image 28.png';

import '../../styles/helpers.scss';

const Conference = () => {
  const [confReservation, setConfReservation] = useState(false);
  const closeConfModal = () => setConfReservation(false);

  return (
    <div className="uk-section uk-padding-remove">
      <div className="uk-grid uk-grid-match background-black-1">

        <div className="uk-width-1-2@m">
          <img src={conferenceImage} alt="conference" />
          <div className="uk-height-max-medium background-white text-black">
            <div className="uk-padding uk-margin-remove uk-align-right@m">Conference details - Postavka</div>
          </div>
        </div>

        <div className="uk-width-expand">
          <div className="uk-width-3-4@m uk-padding uk-margin-auto">
            <div className="text-white">
              <h2 className="uk-text-bold uk-margin-top text-white">Konferencijska sala</h2>
              <p>Raspolaže idealnim uslovima za organizaciju skupova do 40 osoba. Sala ima centralnu klimu, podno grejanje i dnevno svetlo. Opremljena je najsavremenijom tehničkom audio/vizuelnom opremom. Najam konferencijske sale uključuje:</p>
              <p>+ Audio/vizuelnu opremu</p>
              <p>+ Wi-Fi I optički internet velike brzine</p>
              <p>+ Tehničku podršku (na zahtev)</p>
              <p>+ Osoblje na recepciji (na zahtev)</p>
              <button
                className="uk-button uk-button-danger uk-button-small uk-text-capitalize uk-border-rounded uk-margin-small-right"
                onClick={() => setConfReservation(true)}>
                Rezervišite!
              </button>
              <button className="uk-button uk-button-secondary uk-button-small uk-text-capitalize uk-border-rounded">
                Galerija
              </button>
              <p className="uk-text-bold">Preuzmite plan objekta u PDF</p>
            </div>
          </div>
        </div>

      </div>

      {confReservation && (
        <Modal id="modal-button">
          <ConfReservation closeConfModal={closeConfModal} />
        </Modal>
      )}
      
    </div>
  );
}

export default Conference;