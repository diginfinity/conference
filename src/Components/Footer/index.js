import React from 'react';

import '../../styles/helpers.scss';

function Footer() {
  return (
    <div className="uk-section uk-padding-remove-bottom background-black-1">
      <div className="uk-container uk-margin-auto uk-grid text-white">
        <div className="uk-width-1-4@m logo-line-height uk-margin-medium-top uk-margin-medium-bottom">
          <p className="uk-margin-remove uk-text-bold">digital</p>
          <p className="uk-margin-remove uk-text-bold">infinity.</p>
        </div>
        <div className="uk-width-1-4@m">
          <p className="uk-text-bold uk-margin-medium-top text-gray">Novi Sad</p>
          <div className="footer-line-height uk-margin-medium-top">
            <p>Bulevar Kralja Petra I 89,</p>
            <p>21000 Novi Sad</p>
            <p>PAK code: 401245</p>
            <p>Serbia</p>
          </div>

          <p className="uk-text-bold text-gray uk-margin-medium-top">Veternik</p>
          <div className="footer-line-height uk-margin-medium-top">
            <p>Novosadski put 74,</p>
            <p>21203 Veternik (Novi Sad)</p>
            <p>PAK code: 407860</p>
            <p>Serbia</p>
          </div>
        </div>
        <div className="uk-width-1-4@m">
          <p className="uk-text-bold uk-margin-medium-top text-gray">Zakup konferencijske sale</p>
          <div className="footer-line-height uk-margin-medium-top">
            <p>Zainteresovani za zakup?</p>
            <p>conference@digitalinfinity.rs</p>
          </div>
        </div>
        <div className="uk-width-1-4@m">
          <p className="uk-text-bold uk-margin-medium-top text-gray">Kompanijske informacije</p>
          <div className="footer-line-height uk-margin-medium-top">
            <p>DIGITAL INFINITY DOO Novi Sad</p>
            <p>Bulevar Kralja Petra I 89, 21000 Novi Sad</p>
          </div>
          <div className="footer-line-height uk-margin-medium-top">
            <p>PIB: 110217311</p>
            <p>Maticni bro: 21318507</p>
          </div>
          <div className="footer-line-height uk-margin-medium-top">
            <p>Tel: +381 21 300 2956</p>
            <p>Email: office@digitalinfinity.rs</p>
          </div>
          <p className="uk-margin-medium-top">digitalinfinity.rs</p>
        </div>
      </div>

      <div className="uk-container uk-margin-auto uk-padding">
        <hr className="footer-line"/>
        <div className="uk-flex uk-flex-between">
          <p className="uk-margin-remove uk-text-meta">© 2017 - {new Date().getFullYear()} Digital Infinity</p>
          <p className="uk-margin-remove uk-text-meta">Sva prava zadržana.</p>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;