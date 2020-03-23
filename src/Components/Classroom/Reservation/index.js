import React from "react";
import "./style.scss";

const ClassReservation = () => {
  return (
    <div className="class--reservation">
      <div className="class--reservation--container">
        <div className="class--reservation--container--card">
          <h1>Rezervacija</h1>
          <h2>Učionica</h2>
          <div className="display">
            <div className="display--item--1">
              <form className="reservation--form">
                <label>Broj predavača</label>
                <input type="text"/>
                <label>Broj učenika</label>
                <input type="text"/>
                <button>
                  Sledeći korak
                </button>
              </form>
            </div>
            <div className="display--item--2">
              <p>Popunjenost 96.77%</p>
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

export default ClassReservation;
