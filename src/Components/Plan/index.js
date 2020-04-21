import React, { useState } from 'react';

import '../../styles/helpers.scss';

function Plan() {
  const [conPrice, setConPrice] = useState('2,400 RSD');
  const [conBtnColor, setConBtnColor] = useState('#F47064');
  const [disabledConBtn, setDisabledConBtn] = useState('#F2E8E6');

  const [clsPrice, setClsPrice] = useState('4,200 RSD');
  const [clsBtnColor, setClsBtnColor] = useState('#F47064');
  const [disabledClsBtn, setDisabledClsBtn] = useState('#F2E8E6');

  return (
    <div className="uk-section background-pink">
      <div className="uk-container uk-margin-auto uk-grid uk-child-width-1-2@m">
        <div className="uk-padding">
          <p className="uk-text-bold uk-heading-small uk-margin-remove">Izaberite vaš <span className="uk-text-danger">plan.</span></p>
          <p className="uk-margin-remove uk-padding uk-padding-remove-left">Platite po satu za potpuno opremljenu salu za sastanke, uključujući uređaje, nameštaj, internet velike brzine i recepciju.</p>
          <div className="uk-grid uk-child-width-1-2@m">
            <div className="uk-padding">
              <p className="uk-text-bold">Konferencijska sala</p>
              <h3>{conPrice} <span className="uk-text-meta uk-text-top">Sa PDV</span></h3>
              <div className="uk-button-group">
                <button className="uk-button uk-button-secondary uk-button-small uk-text-capitalize" style={{'background-color':`${conBtnColor}`}} onClick={() => {setConPrice('2,400 RSD'); setConBtnColor('#F47064'); setDisabledConBtn('#F2E8E6')}}>Po satu</button><button className="uk-button uk-button-secondary uk-button-small uk-text-capitalize" style={{'background-color':`${disabledConBtn}`}} onClick={() => {setConPrice('10,400 RSD'); setConBtnColor('#F2E8E6'); setDisabledConBtn('#F47064')}}>Po danu</button>
              </div>
              <p className="uk-text-meta">Kapacitet do 45 osoba | Novi Sad</p>
              <button className="uk-button uk-button-secondary uk-button-small uk-text-capitalize uk-border-rounded">
                Rezervišite!
              </button>
            </div>
            <div className="uk-padding">
              <p className="uk-text-bold">Učionica</p>
              <h3>{clsPrice} <span className="uk-text-meta uk-text-top">Sa PDV</span></h3>
              <div className="uk-button-group">
                <button className="uk-button uk-button-secondary uk-button-small uk-text-capitalize" style={{'background-color':`${clsBtnColor}`}} onClick={() => {setClsPrice('4,200 RSD'); setClsBtnColor('#F47064'); setDisabledClsBtn('#F2E8E6')}}>Po satu</button><button className="uk-button uk-button-secondary uk-button-small uk-text-capitalize" style={{'background-color':`${disabledClsBtn}`}} onClick={() => {setClsPrice('16,200 RSD'); setClsBtnColor('#F2E8E6'); setDisabledClsBtn('#F47064')}}>Po danu</button>
              </div>
              <p className="uk-text-meta">Kapacitet do 13 osoba | Novi Sad</p>
              <button className="uk-button uk-button-secondary uk-button-small uk-text-capitalize uk-border-rounded">
                Rezervišite!
              </button>
            </div>
          </div>
        </div>

        <div className="uk-padding">
          <h2 className="uk-text-bold uk-margin-top">Često postavljana pitanja</h2>
          <p className="uk-text-bold">+ Da li postoji mogućnost popusta na zakup većeg broja dana/sati?</p>
          <p>Da, naravno. Slobodno nas kontaktirajte da porazgovaramo o svim mogućim opcijama kako bi izašli u susret Vašim potrebama.</p>
          <p className="uk-text-bold">+ Da li možete obezbediti ketering?</p>
          <p>Digital Infinity se ne bave keteringom, ali imamo saradnju sa par renomiranih ketering servisa u Novom Sadu, te Vam možemo pomoći u odabiru.</p>
          <p className="uk-text-bold">+ Da li možete obezbediti osoblje za recepciju/prijem gostiju?</p>
          <p>Naravno. Za svaku dodatnu uslugu iz našeg domena, možete nas kontaktirati i saznati više o uslovima.</p>
        </div>
      </div>
    </div>
  );
}

export default Plan;