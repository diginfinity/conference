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
      <div className="class--step--one">
        <h1>Rezervacija</h1>
        <h2>Učionica</h2>
        <div className="display">
          <div className="display--item--1">
            <form className="reservation--form" onSubmit={handleSubmit(onSubmit)}>
              <label>Broj predavača</label>
              <input
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
              <ErrorMessage errors={errors} name="teacher" as="p" />
              <span className="max--num">Maksimalno 1 osoba</span>
              <br/>

              <label>Broj učenika</label>
              <input
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
              <ErrorMessage errors={errors} name="student" as="p" />
              <span className="max--num">Maksimalno 13 osoba</span>
              <br/>

              <button
                type="submit">
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
  } else return <StepTwo />
};

export default StepOne;