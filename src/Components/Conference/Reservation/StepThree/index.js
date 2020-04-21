import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Close from "../Close";

import "./style.scss";

const StepThree = () => {
  const [state, setState] = useState(true);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    setState(false);
    console.log(data);
  };

  if(state){
    return (
      <div className="conf--step--three">
        <h1>Rezervacija</h1>
        <h2>Dodatne usluge</h2>
        <div className="display">
          <div className="display--item--1">
            <form className="reservation--form" onSubmit={handleSubmit(onSubmit)}>
              <label>Osoblje na recepciji</label>
              <select name="stuff" ref={register({ required: true })}>
                <option value="yes">DA</option>
                <option value="no">NE</option>
              </select>
              <div className="price">350 RSD / sat</div>
              <br/>

              <label>Tehnička podrška</label>
              <select name="technical-support" ref={register({ required: true })}>
                <option value="yes">DA</option>
                <option value="no">NE</option>
              </select>
              <div className="price">450 RSD / sat</div>
              <br/>

              <label>Dodatna poruka</label>
              <textarea
                name="additional-message"
                rows="4"
                placeholder="Opciono"
                ref={register()}
              />
              
              <button
                type="submit">
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
    );
  } else return <Close />
};

export default StepThree;