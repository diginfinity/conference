import React from 'react';
import locationImage from '../../assets/Location/Location.png';
import mailImage from '../../assets/oh__icon1.svg';
import phoneImage from '../../assets/oh__icon2.svg';

import './contact.scss';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-section-1">
        <img src={locationImage} alt="home" />
      </div>
      <div className="contact-section-2">
        <div>
          <img src={phoneImage} alt="home" />
          <p>Pozovite nas</p>

          <p className="gray-paragraph">Zakup konferencijske sale</p>
          <p>conference@digitalinfinity.rs</p>
          <p>Tel: +381 21 300 2956</p>

          <p className="gray-paragraph">Generalni kontakt</p>
          <p>office@digitalinfinity.rs</p>
          <p>Tel: +381 21 300 2956</p>
        </div>
        <div>
          <img src={mailImage} alt="home" />
          <p>Adresa konferencijske sale</p>
          <p className="gray-paragraph">Veternik</p>
          <p>Novosadski put 74,</p>
          <p>21203 Veternik (Novi Sad)</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;