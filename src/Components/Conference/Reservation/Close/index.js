import React from "react";

import "./style.scss";

const Close = () => {
  return (
    <div className="conf--close">
      <div className="display">
        <h1>Hvala!</h1>
        <p>vaša rezervacija je primljena!</p>
        <br/>
        <button>
          Zatvori
        </button>
        <p>Uskoro ćemo Vas kontaktirati za detalje I predračun.</p>
      </div>
      <p className="card--footer">Ukoliko ne želite da rezervaciju popunjavate online ili imate dodatnih zahteva, možete nas kontaktirati na telefon: 021 300 2956, radnim danima od 8:00h do 16:00h</p>
    </div>
  );
};

export default Close;