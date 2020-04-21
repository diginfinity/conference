import React, {useState} from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import StepTwo from "../StepTwo";

import "./style.scss";

const StepOne = () => {
  const [state, setState] = useState(true);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    setState(false);
    console.log(data);
  };
  
  if(state) {
    return (
      <div className="conf--step--one">
        <h1>Rezervacija</h1>
        <h2>Konferencijska sala</h2>
        <div className="display">
          <div className="display--item--1">
            <form className="reservation--form" onSubmit={handleSubmit(onSubmit)}>
              <label>Postavka</label>
              <select name="setup" ref={register({ required: true })}>
                <option value="one-row">U-oblik [jedan red]</option>
                <option value="two-rows">U-oblik [dupli red]</option>
              </select>
              <br/>

              <div className="form--space"></div>

              <label>Broj predavača</label>
              <input
                type="text"
                name="host"
                ref={register({
                  required: "Popunite ovo polje",
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "Samo brojevi mogu da se unesu"
                  }
                })}
              />
              <ErrorMessage errors={errors} name="host" as="p" />
              <div className="max--num">Maksimalno 4 osobe</div>
              <br/>

              <label>Broj gostiju</label>
              <input
                type="text"
                name="guest"
                ref={register({
                  required: "Popunite ovo polje",
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "Samo brojevi mogu da se unesu"
                  }
                })}
              />
              <ErrorMessage errors={errors} name="guest" as="p" />
              <div className="max--num">Maksimalno 28 osoba</div>
              <br/>

              <button
                type="submit">
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
    );
  } else return <StepTwo />
};

export default StepOne;