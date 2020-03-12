import React, { useState } from 'react';

import './plan.scss';

function Plan() {
  const [conPrice, setConPrice] = useState('2,400 RSD');
  const [conBtnColor, setConBtnColor] = useState('#F47064');
  const [disabledConBtn, setDisabledConBtn] = useState('#F2E8E6');

  const [clsPrice, setClsPrice] = useState('4,200 RSD');
  const [clsBtnColor, setClsBtnColor] = useState('#F47064');
  const [disabledClsBtn, setDisabledClsBtn] = useState('#F2E8E6');

  return (
    <div className="plan">
      <div className="plan-section-1">
        <h3 className="plan-title">Izaberite vaš <span className="red">plan.</span></h3>
        <p>Platite po satu za potpuno opremljenu salu za sastanke, uključujući uređaje, nameštaj, internet velike brzine i recepciju.</p>
        <div className="price">
          <div className="price-item">
            <p><b>Konferencijska sala</b></p>
            <h3>{conPrice} <span className="pdv">Sa PDV</span></h3>
            <button className="conference-button" style={{'background-color':`${conBtnColor}`}} onClick={() => {setConPrice('2,400 RSD'); setConBtnColor('#F47064'); setDisabledConBtn('#F2E8E6')}}>Po satu</button><button className="conference-button" style={{'background-color':`${disabledConBtn}`}} onClick={() => {setConPrice('10,400 RSD'); setConBtnColor('#F2E8E6'); setDisabledConBtn('#F47064')}}>Po danu</button>
            <p>Kapacitet do 45 osoba | Novi Sad</p>
            <button className="plan-button">Rezervišite!</button>
          </div>
          <div className="price-item">
            <p><b>Učionica</b></p>
            <h3>{clsPrice} <span className="pdv">Sa PDV</span></h3>
            <button className="classroom-button" style={{'background-color':`${clsBtnColor}`}} onClick={() => {setClsPrice('4,200 RSD'); setClsBtnColor('#F47064'); setDisabledClsBtn('#F2E8E6')}}>Po satu</button><button className="classroom-button" style={{'background-color':`${disabledClsBtn}`}} onClick={() => {setClsPrice('16,200 RSD'); setClsBtnColor('#F2E8E6'); setDisabledClsBtn('#F47064')}}>Po danu</button>
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