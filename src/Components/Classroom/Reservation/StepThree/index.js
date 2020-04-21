import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Close from "../Close";

import '../../../../styles/helpers.scss';

const StepThree = () => {
  const [state, setState] = useState(true);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    setState(false);
    console.log(data);
  };

  if(state){
    return (
      <div className="uk-position-top-center uk-padding text-white">
        <h1 className="text-white">Rezervacija</h1>
        <p className="uk-text-large">Dodatne usluge</p>
        <div className="uk-grid uk-padding uk-padding-remove-right text-black">
          <div className="uk-width-1-2@m uk-padding background-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="uk-text-small uk-margin-remove uk-text-bold">Osoblje na recepciji</p>
              <select className="uk-select" name="stuff" ref={register({ required: true })}>
                <option value="yes">DA</option>
                <option value="no">NE</option>
              </select>
              <span className="uk-text-meta">350 RSD / sat</span>

              <p className="uk-text-small uk-margin-remove uk-text-bold">Tehnička podrška</p>
              <select className="uk-select" name="technical-support" ref={register({ required: true })}>
                <option value="yes">DA</option>
                <option value="no">NE</option>
              </select>
              <span className="uk-text-meta">450 RSD / sat</span>

              <p className="uk-text-small uk-margin-remove uk-text-bold">Dodatna poruka</p>
              <textarea
                className="uk-textarea"
                name="additional-message"
                rows="4"
                placeholder="Opciono"
                ref={register()}
              />

              <button
                className="uk-button uk-button-secondary uk-button-small uk-text-capitalize uk-margin-small-top uk-border-rounded"
                type="submit">
                Pošaljite zahtev
              </button>
            </form>
          </div>
          <div className="uk-width-1-2@m uk-padding uk-visible@m background-gray-2">
            <h2 className="uk-text-large uk-text-bold">Detalji:</h2>
            <p>Tip: Konferencijska sala</p>
            <p>Broj osoba: 31</p>
            <p>Datum od: 02.03.2020</p>
            <p>Datum do: 02.03.2020</p>
            <p>Od: 9:00h - 18:00h</p>
            <p>Recepcija: <span className="uk-text-success">DA</span></p>
            <p>Tehnicka podrska: <span className="uk-text-danger">NE</span></p>
            <h2 className="uk-text-large uk-text-bold">Ukupno: <span className="uk-text-danger">24,750</span> RSD<span className="uk-text-meta uk-text-top">Sa PDV</span></h2>
            <hr className="hr-line"/>
          </div>
        </div>
        <p className="uk-text-small">Ukoliko ne želite da rezervaciju popunjavate online, možete nas kontaktirati na telefon: 021 300 2956, radnim danima od 8:00h do 16:00h</p>
      </div>
    );
  } else return <Close />
};

export default StepThree;