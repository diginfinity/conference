import React, {useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import StepThree from "../StepThree";

import '../../../../styles/helpers.scss';

const StepTwo = () => {
  const [state, setState] = useState(true);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    setState(false);
    console.log(data);
  };

  if(state){
    return (
      <div className="uk-position-top-center uk-padding text-white">
        <h1 className="text-white">Rezervacija</h1>
        <p className="uk-text-large">Izaberite vreme i datum I unedited kontakt informacije</p>
        <div className="uk-grid uk-padding uk-padding-remove-right text-black">
          <div className="uk-width-1-2@m uk-padding background-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="uk-grid uk-child-width-1-2@m">
                <div>
                  <p className="uk-text-small uk-margin-remove uk-text-bold">Datum od</p>
                  <input
                    className="uk-input uk-margin-small-bottom"
                    type="date"
                    name="date-from"
                    ref={register({
                      required: "Unesite datum"
                    })}
                  />
                  <ErrorMessage errors={errors} className="uk-text-danger uk-margin-remove" name="date-from" as="p" />
                </div>
                
                <div className="date--section">
                  <p className="uk-text-small uk-margin-remove uk-text-bold">Datum do</p>
                  <input
                    className="uk-input uk-margin-small-bottom"
                    type="date"
                    name="date-to"
                    ref={register({
                      required: "Unesite datum"
                    })}
                  />
                  <ErrorMessage errors={errors} className="uk-text-danger uk-margin-remove" name="date-to" as="p" />
                </div>
              </div>

              <div className="uk-grid uk-child-width-1-2@m uk-margin-small-top">
                <div>
                  <p className="uk-text-small uk-margin-remove uk-text-bold">Vreme od</p>
                  <input
                    className="uk-input uk-margin-small-bottom"
                    type="time"
                    name="time-from"
                    ref={register({
                      required: "Unesite vreme"
                    })}
                  />
                  <ErrorMessage errors={errors} className="uk-text-danger uk-margin-remove" name="time-from" as="p" />
                </div>
                <div className="date--section">
                  <p className="uk-text-small uk-margin-remove uk-text-bold">Vreme do</p>
                  <input
                    className="uk-input uk-margin-small-bottom"
                    type="time"
                    name="time-to"
                    ref={register({
                      required: "Unesite vreme"
                    })}
                  />
                  <ErrorMessage errors={errors} className="uk-text-danger uk-margin-remove" name="time-to" as="p" />
                </div>
              </div>
              
              <p className="uk-text-small uk-margin-remove uk-text-bold">Vase ime i/ili naziv kompanije organizatora dogadjaja</p>
              <input
                className="uk-input uk-margin-small-bottom"
                type="text"
                name="company-name"
                ref={register({
                  required: "Popunite ovo polje"
                })}
              />
              <ErrorMessage errors={errors} className="uk-text-danger uk-margin-remove" name="company-name" as="p" />

              <p className="uk-text-small uk-margin-remove uk-text-bold">Kontakt Telefon</p>
              <input
                className="uk-input uk-margin-small-bottom"
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
              <ErrorMessage errors={errors} className="uk-text-danger uk-margin-remove" name="phone" as="p" />

              <p className="uk-text-small uk-margin-remove uk-text-bold">Kontakt Telefon</p>
              <input
                className="uk-input uk-margin-small-bottom"
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
              <ErrorMessage errors={errors} className="uk-text-danger uk-margin-remove" name="email" as="p" />
              
              <button
                className="uk-button uk-button-secondary uk-button-small uk-text-capitalize uk-margin-small-top uk-border-rounded"
                type="submit">
                Sledeći korak
              </button>
            </form>
          </div>
          <div className="uk-width-1-2@m uk-padding background-gray-2">
            <h2 className="uk-text-large uk-text-bold">Detalji:</h2>
            <p>Tip: Konferencijska sala</p>
            <p>Broj osoba: 31</p>
            <p>Datum od: 02.03.2020</p>
            <p>Datum do: 02.03.2020</p>
            <p>Od: 9:00h - 18:00h</p>
            <h2 className="uk-text-large uk-text-bold">Ukupno: <span className="uk-text-danger">21,600</span> RSD<span className="uk-text-meta uk-text-top">Sa PDV</span></h2>
            <hr className="hr-line"/>
          </div>
        </div>
        <p className="uk-text-small">Ukoliko ne želite da rezervaciju popunjavate online, možete nas kontaktirati na telefon: 021 300 2956, radnim danima od 8:00h do 16:00h</p>
      </div>
    );
  } else return <StepThree />
};

export default StepTwo;