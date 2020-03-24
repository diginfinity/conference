import React, {useState} from "react";

import "./style.scss";
import Close from "../Close";

const StepThree = () => {
  const [state, setState] = useState(true)
  if(state){
  return (
    <div className="conf--step--three">
      <h1>Rezervacija</h1>
      <h2>Dodatne usluge</h2>
      <div className="display">
        <div className="display--item--1">
          <form className="reservation--form">
            <label>Osoblje na recepciji</label>
            <select name="" id="">
              <option value="">DA</option>
              <option value="">NE</option>
            </select>
            <span className="price">350 RSD / sat</span>
            <br/>
            <label>Tehnička podrška</label>
            <select name="" id="">
              <option value="">DA</option>
              <option value="">NE</option>
            </select>
            <span className="price">450 RSD / sat</span>
            <br/>
            <label>Dodatna poruka</label>
            <textarea>Opciono</textarea>
            <button onClick={() => setState(false)}>
              Pošaljite zahtev
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
          <br/>
          <p>Recepcija: <span className="green--text">DA</span></p>
          <p>Tehnicka podrska: <span className="red--text">NE</span></p>
          <h1>Ukupno: <span className="red--text">24,750</span> RSD<span className="pdv">Sa PDV</span></h1>
          <hr className="hr--line"/>
        </div>
      </div>
      <p className="card--footer">Ukoliko ne želite da rezervaciju popunjavate online, možete nas kontaktirati na telefon: 021 300 2956, radnim danima od 8:00h do 16:00h</p>
    </div>
  )}else return <Close/>
};

export default StepThree;