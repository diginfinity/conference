import React from "react";

import "./style.scss";

const StepTwo = () => {
  return (
    <div className="conf--step--two">
      <h1>Rezervacija</h1>
      <h2>Izaberite vreme i datum I unedited kontakt informacije</h2>
      <div className="display">
        <div className="display--item--1">
          <form className="reservation--form">
            <div className="date">
              <div className="date--section">
                <label>Datum od</label><br/>
                <input type="date"/>
              </div>
              <div className="date--section">
                <label>Datum do</label><br/>
                <input type="date"/>
              </div>
            </div>

            <div className="date">
              <div className="date--section">
                <label>Vreme od</label><br/>
                <input type="time"/>
              </div>
              <div className="date--section">
                <label>Vreme do</label><br/>
                <input type="time"/>
              </div>
            </div>
            
            <label>Vase ime i/ili naziv kompanije organizatora dogadjaja</label>
            <input type="text"/>
            <label>Kontakt Telefon</label>
            <input type="text"/>
            <label>Kontakt Telefon</label>
            <input type="text"/>
            <button>
              Sledeći korak
            </button>
          </form>
        </div>
        <div className="display--item--2">
          <h2>Detalji:</h2>
          <p>Tip: Konferencijska sala</p>
          <p>Broj osoba: 31</p>
          <p>Datum od: 02.03.2020</p>
          <p>Datum do: 02.03.2020</p>
          <br/>
          <p>Od: 9:00h - 18:00h</p>
          <h1>Ukupno: <span className="red--text">21,600</span> RSD<span className="pdv">Sa PDV</span></h1>
          <hr className="hr--line"/>
        </div>
      </div>
      <p className="card--footer">Ukoliko ne želite da rezervaciju popunjavate online, možete nas kontaktirati na telefon: 021 300 2956, radnim danima od 8:00h do 16:00h</p>
    </div>
  );
};

export default StepTwo;