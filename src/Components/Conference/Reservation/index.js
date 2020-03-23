import React from "react";
import "./style.scss";

const ConfReservation = () => {
  return (
    <div className="conf--reservation">
      <div className="conf--reservation--container">
        <div className="conf--reservation--container--card">
          <h1>Rezervacija</h1>
          <h2>Konferencijska sala</h2>
          <div className="display">
            <div className="display--item--1">
              <form className="reservation--form">
                <label>Postavka</label>
                <select name="" id="">
                  <option value="">U-oblik (jedan red)</option>
                  <option value="">U-oblik (dupli red)</option>
                </select>
                <label>Broj predavača</label>
                <input type="text"/>
                <label>Broj gostiju</label>
                <input type="text"/>
                <button>
                  Sledeći korak
                </button>
              </form>
            </div>
            <div className="display--item--2">
              <p>Popunjenost 70.45%</p>
            </div>
          </div>
          <p className="card--footer">Ukoliko ne želite da rezervaciju popunjavate online, možete nas kontaktirati na telefon: 021 300 2956, radnim danima od 8:00h do 16:00h</p>
        </div>
        
        <div className="reservation--container--logo">
          <p>digital</p>
          <p>infinity.</p>
          <p className="red">conference</p>
        </div>
      </div>
    </div>
  );
};

export default ConfReservation;
