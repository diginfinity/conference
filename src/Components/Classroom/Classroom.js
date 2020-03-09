import React from 'react';
import conferenceImage from '../../assets/Image 29/Image 29.png';

import './classroom.scss';

function Classroom() {
  return (
    <div className="classroom">
      <div className="classroom-section-1">
        <h3 className="classroom-title">Učionica</h3>
        <p>Raspolaže idealnim uslovima za organizaciju obuke do 13 osoba. Učionica ima centralnu klimu, podno grejanje i dnevno svetlo. Opremljena je najsavremenijom tehničkom audio/vizuelnom opremom i računarima sa monitorom. Najam učionice uključuje:</p>
        <p>+ Audio/vizuelnu opremu</p>
        <p>+ Računare</p>
        <p>+ Wi-Fi I optički internet velike brzine</p>
        <p>+ Tehničku podršku (na zahtev)</p>
        <p>+ Osoblje na recepciji (na zahtev)</p>
        <button className="classroom-button-1">Rezervišite!</button><button className="classroom-button-2">Galerija</button>
        <p><b>Preuzmite plan objekta u PDF</b></p>
      </div>
      <div className="classroom-section-2">
        <img src={conferenceImage} alt="home" />
      </div>
    </div>
  );
}

export default Classroom;