import React, {useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import StepThree from "../StepThree";

import "./style.scss";

const StepTwo = () => {
  const [state, setState] = useState(true);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    setState(false);
    console.log(data);
  };

  if(state){
    return (
      <div className="conf--step--two">
        <h1>Rezervacija</h1>
        <h2>Izaberite vreme i datum I unedited kontakt informacije</h2>
        <div className="display">
          <div className="display--item--1">
            <form className="reservation--form" onSubmit={handleSubmit(onSubmit)}>
              <div className="date">
                <div className="date--section">
                  <label>Datum od</label><br/>
                  <input
                    type="date"
                    name="date-from"
                    ref={register({
                      required: "Unesite datum"
                    })}
                  />
                  <ErrorMessage errors={errors} name="date-from" as="p" />
                </div>

                <div className="date--section">
                  <label>Datum do</label><br/>
                  <input
                    type="date"
                    name="date-to"
                    ref={register({
                      required: "Unesite datum"
                    })}
                  />
                  <ErrorMessage errors={errors} name="date-to" as="p" />
                </div>
              </div>

              <div className="date">
                <div className="date--section">
                  <label>Vreme od</label><br/>
                  <input
                    type="time"
                    name="time-from"
                    ref={register({
                      required: "Unesite vreme"
                    })}
                  />
                  <ErrorMessage errors={errors} name="time-from" as="p" />
                </div>
                <div className="date--section">
                  <label>Vreme do</label><br/>
                  <input
                    type="time"
                    name="time-to"
                    ref={register({
                      required: "Unesite vreme"
                    })}
                  />
                  <ErrorMessage errors={errors} name="time-to" as="p" />
                </div>
              </div>
              
              <label>Vase ime i/ili naziv kompanije organizatora dogadjaja</label>
              <input
                type="text"
                name="company-name"
                ref={register({
                  required: "Popunite ovo polje"
                })}
              />
              <ErrorMessage errors={errors} name="company-name" as="p" />
              
              <label>Kontakt Telefon</label>
              <input
                type="text"
                name="phone"
                ref={register({
                  required: "Popunite ovo polje",
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "Samo brojevi mogu da se unesu"
                  }
                })}
              />
              <ErrorMessage errors={errors} name="phone" as="p" />
              
              <label>Kontakt Email</label>
              <input
                type="text"
                name="email"
                ref={register({
                  required: "Popunite ovo polje",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Neispravana email adresa"
                  }
                })}
              />
              <ErrorMessage errors={errors} name="email" as="p" />
              
              <button
                type="submit">
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
  } else return <StepThree />
};

export default StepTwo;