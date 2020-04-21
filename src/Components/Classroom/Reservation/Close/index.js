import React from "react";

import '../../../../styles/helpers.scss';

const Close = ({ closeConfModal }) => {
  return (
    <div className="uk-position-top-center uk-padding text-black">
      <div className="uk-width-1-2@m uk-margin-auto uk-padding background-gray-2">
        <h1>Hvala!</h1>
        <p>vaša rezervacija je primljena!</p>
        <br/>
        <button
          className="uk-button uk-button-secondary uk-button-small uk-text-capitalize uk-margin-small-top uk-border-rounded uk-align-center"
          onClick={closeConfModal}>
          Zatvori
        </button>
        <p>Uskoro ćemo Vas kontaktirati za detalje I predračun.</p>
      </div>
      <p className="uk-text-small">Ukoliko ne želite da rezervaciju popunjavate online ili imate dodatnih zahteva, možete nas kontaktirati na telefon: 021 300 2956, radnim danima od 8:00h do 16:00h</p>
    </div>
  );
};

export default Close;