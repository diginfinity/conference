import React, {useState} from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import StepTwo from "../StepTwo";

import '../../../../styles/helpers.scss';

const StepOne = () => {
  const [state, setState] = useState(true);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    setState(false);
    console.log(data);
  };

  if(state) {
    return (
      <div className="uk-position-top-center uk-padding text-white">
        <h1 className="text-white">Rezervacija</h1>
        <p className="uk-text-large">Konferencijska sala</p>
        <div className="uk-grid uk-padding uk-padding-remove-right text-black">
          <div className="uk-width-1-2@m uk-padding background-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="uk-text-small uk-margin-remove uk-text-bold">Broj predavača</p>
              <input
                className="uk-input"
                type="text"
                name="teacher"
                ref={register({
                  required: "Popunite ovo polje",
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "Samo brojevi mogu da se unesu"
                  }
                })}
              />
              <ErrorMessage errors={errors} className="uk-text-danger uk-margin-remove" name="teacher" as="p" />
              <span className="uk-text-meta">Maksimalno 1 osoba</span>

              <p className="uk-text-small uk-margin-remove uk-text-bold">Broj učenika</p>
              <input
                className="uk-input"
                type="text"
                name="student"
                ref={register({
                  required: "Popunite ovo polje",
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "Samo brojevi mogu da se unesu"
                  }
                })}
              />
              <ErrorMessage errors={errors} className="uk-text-danger uk-margin-remove" name="student" as="p" />
              <span className="uk-text-meta">Maksimalno 13 osoba</span>
              <br/>

              <button
                className="uk-button uk-button-secondary uk-button-small uk-text-capitalize uk-margin-small-top uk-border-rounded"
                type="submit">
                Sledeći korak
              </button>
            </form>
          </div>
          <div className="uk-width-1-2@m uk-padding uk-visible@m background-gray-2">
            <p>Popunjenost 96.77%</p>
          </div>
        </div>
        <p className="card--footer">Ukoliko ne želite da rezervaciju popunjavate online, možete nas kontaktirati na telefon: 021 300 2956, radnim danima od 8:00h do 16:00h</p>
      </div>
    );
  } else return <StepTwo />
};

export default StepOne;