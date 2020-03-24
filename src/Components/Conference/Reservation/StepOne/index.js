import React, {useState} from "react";

import "./style.scss";
import StepTwo from "../StepTwo";

const StepOne = (props) => {
  const [state, setState] = useState(true)
  
  if(state){
  return (
    <div className="conf--step--one">
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
            <span className="max--num">Maksimalno 4 osobe</span>
            <br/>
            <label>Broj gostiju</label>
            <input type="text"/>
            <span className="max--num">Maksimalno 28 osoba</span>
            <br/>
            <button onClick={() => setState(false)}>
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
  );}else return <StepTwo />
};

export default StepOne;