import React from 'react';
import conferenceImage from '../../assets/Image 28/Image 28.png';

import './conference.scss';

function Conference() {
  return (
    <div className="conference">
      <div className="conference-section-1">
        <img src={conferenceImage} alt="conference" />
        <div className="conference-details"></div>
      </div>
      <div className="conference-section-2">
        <h3 className="conference-title">Konferencijska sala</h3>
        <p>Raspolaže idealnim uslovima za organizaciju skupova do 40 osoba. Sala ima centralnu klimu, podno grejanje i dnevno svetlo. Opremljena je najsavremenijom tehničkom audio/vizuelnom opremom. Najam konferencijske sale uključuje:</p>
        <p>+ Audio/vizuelnu opremu</p>
        <p>+ Wi-Fi I optički internet velike brzine</p>
        <p>+ Tehničku podršku (na zahtev)</p>
        <p>+ Osoblje na recepciji (na zahtev)</p>
        <button className="conference-button-1">Rezervišite!</button><button className="conference-button-2">Galerija</button>
        <p><b>Preuzmite plan objekta u PDF</b></p>
      </div>
    </div>
  );
}

export default Conference;