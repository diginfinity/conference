import React from "react";

import "./style.scss";

const StepOne = () => {
  return (
    <div className="class--step--one">
      <h1>Rezervacija</h1>
      <h2>Učionica</h2>
      <div className="display">
        <div className="display--item--1">
          <form className="reservation--form">
            <label>Broj predavača</label>
            <input type="text"/>
            <span className="max--num">Maksimalno 1 osoba</span>
            <br/>
            <label>Broj učenika</label>
            <input type="text"/>
            <span className="max--num">Maksimalno 13 osoba</span>
            <br/>
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
  );
};

export default StepOne;