import React from 'react';
import officeImage from '../../assets/Image 30/Image 30.png';
import mailImage from '../../assets/oh__icon1.svg';
import phoneImage from '../../assets/oh__icon2.svg';

import '../../styles/helpers.scss';

function Contact() {
  return (
    <div className="uk-section uk-padding-remove">

      <div>
        <img className="uk-height-max-large uk-width-1-1" src={officeImage} alt="office" />
      </div>

      <div className="uk-grid">
        <div className="uk-width-1-2@m">
          <div className="uk-width-1-1">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.0430038979803!2d19.763959714941684!3d45.24692315593711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11e35a1136ed%3A0x8ccf5fe3888d0c0!2sNovosadski%20put%2074%2C%20Novi%20Sad!5e0!3m2!1sen!2srs!4v1585744316385!5m2!1sen!2srs" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>

        <div className="uk-width-1-4@m uk-padding text-white background-black-1">
          <div className="uk-padding uk-padding-remove-vertical">
            <img src={phoneImage} alt="phone" />
            <p>Pozovite nas</p>

            <p className="uk-text-meta">Zakup konferencijske sale</p>
            <div className="footer-line-height uk-margin-medium-top">
              <p>conference@digitalinfinity.rs</p>
              <p>Tel: +381 21 300 2956</p>
            </div>

            <p className="uk-text-meta">Generalni kontakt</p>
            <div className="footer-line-height uk-margin-medium-top">
              <p>office@digitalinfinity.rs</p>
              <p>Tel: +381 21 300 2956</p>
            </div>
          </div>
        </div>

        <div className="uk-width-1-4@m uk-padding text-white background-black-2">
          <div className="uk-padding uk-padding-remove-vertical">
            <img src={mailImage} alt="mail" />
            <p>Adresa konferencijske sale</p>
            <p className="uk-text-meta">Veternik</p>
            <div className="footer-line-height uk-margin-medium-top">
              <p>Novosadski put 74,</p>
              <p>21203 Veternik (Novi Sad)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;