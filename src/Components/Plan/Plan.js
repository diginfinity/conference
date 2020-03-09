import React, { useState } from 'react';

import './plan.scss';

function Plan() {
  const [conferencePrice, setConferencePrice] = useState('2,400 RSD');
  const [classroomPrice, setClassroomPrice] = useState('4,200 RSD');

  return (
    <div className="plan">
      <div className="plan-section-1">
        <h3 className="plan-title">Izaberite vaš <span className="red">plan.</span></h3>
        <p>Platite po satu za potpuno opremljenu salu za sastanke, uključujući uređaje, nameštaj, internet velike brzine i recepciju.</p>
        <div className="price">
          <div className="price-item">
            <p><b>Konferencijska sala</b></p>
            <h3>{conferencePrice} <span className="pdv">Sa PDV</span></h3>
            <button className="conference-button" onClick={() => setConferencePrice('2,400 RSD')}>Po satu</button><button className="conference-button" onClick={() => setConferencePrice('10,400 RSD')}>Po danu</button>
            <p>Kapacitet do 45 osoba | Novi Sad</p>
            <button className="plan-button">Rezervišite!</button>
          </div>
          <div className="price-item">
            <p><b>Učionica</b></p>
            <h3>{classroomPrice} <span className="pdv">Sa PDV</span></h3>
            <button className="classroom-button" onClick={() => setClassroomPrice('4,200 RSD')}>Po satu</button><button className="classroom-button" onClick={() => setClassroomPrice('16,200 RSD')}>Po danu</button>
            <p>Kapacitet do 13 osoba | Novi Sad</p>
            <button className="plan-button">Rezervišite!</button>
          </div>
        </div>
      </div>
      <div className="plan-section-2">
        <h3 className="questions">Često postavljana pitanja</h3>
        <p className="bold-paragraph">+ Da li postoji mogućnost popusta na zakup većeg broja dana/sati?</p>
        <p>Da, naravno. Slobodno nas kontaktirajte da porazgovaramo o svim mogućim opcijama kako bi izašli u susret Vašim potrebama.</p>
        <p className="bold-paragraph">+ Da li možete obezbediti ketering?</p>
        <p>Digital Infinity se ne bave keteringom, ali imamo saradnju sa par renomiranih ketering servisa u Novom Sadu, te Vam možemo pomoći u odabiru.</p>
        <p className="bold-paragraph">+ Da li možete obezbediti osoblje za recepciju/prijem gostiju?</p>
        <p>Naravno. Za svaku dodatnu uslugu iz našeg domena, možete nas kontaktirati i saznati više o uslovima.</p>
      </div>
    </div>
  );
}

export default Plan;