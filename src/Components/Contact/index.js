import React from 'react';
import officeImage from '../../assets/Image 30/Image 30.png';
import locationImage from '../../assets/Location/Location.png';
import mailImage from '../../assets/oh__icon1.svg';
import phoneImage from '../../assets/oh__icon2.svg';

import './styles.scss';

function Contact() {
  return (
    <div className="contact">
      <div className="contact--image">
        <img src={officeImage} alt="office" />
      </div>
      <div className="contact--details">
        <div className="contact--details--section--1">
          <img src={locationImage} alt="map" />
        </div>
        <div className="contact--details--section--2">
          <div className="section--phone">
            <img src={phoneImage} alt="phone" />
            <p>Pozovite nas</p>

            <p className="gray--paragraph">Zakup konferencijske sale</p>
            <p>conference@digitalinfinity.rs</p>
            <p>Tel: +381 21 300 2956</p>

            <p className="gray--paragraph">Generalni kontakt</p>
            <p>office@digitalinfinity.rs</p>
            <p>Tel: +381 21 300 2956</p>
          </div>
          <div className="section--mail">
            <img src={mailImage} alt="mail" />
            <p>Adresa konferencijske sale</p>
            <p className="gray--paragraph">Veternik</p>
            <p>Novosadski put 74,</p>
            <p>21203 Veternik (Novi Sad)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;