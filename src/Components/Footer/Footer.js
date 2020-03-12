import React from 'react';

import './footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-logo">
          <p>digital</p>
          <p>infinity.</p>
        </div>
        <div className="footer-item">
          <p className="gray-paragraph">Novi Sad</p>
          <div className="paragraphs-block">
            <p>Bulevar Kralja Petra I 89,</p>
            <p>21000 Novi Sad</p>
            <p>PAK code: 401245</p>
            <p>Serbia</p>
          </div>

          <p className="gray-paragraph">Veternik</p>
          <div className="paragraphs-block">
            <p>Novosadski put 74,</p>
            <p>21203 Veternik (Novi Sad)</p>
            <p>PAK code: 407860</p>
            <p>Serbia</p>
          </div>
        </div>
        <div className="footer-item">
          <p className="gray-paragraph">Zakup konferencijske sale</p>
          <div className="paragraphs-block">
            <p>Zainteresovani za zakup?</p>
            <p>conference@digitalinfinity.rs</p>
          </div>
        </div>
        <div className="footer-item">
          <p className="gray-paragraph">Kompanijske informacije</p>
          <div className="paragraphs-block">
            <p>DIGITAL INFINITY DOO Novi Sad</p>
            <p>Bulevar Kralja Petra I 89, 21000 Novi Sad</p>
          </div>
          <div className="paragraphs-block">
            <p>PIB: 110217311</p>
            <p>Maticni bro: 21318507</p>
          </div>
          <div className="paragraphs-block">
            <p>Tel: +381 21 300 2956</p>
            <p>Email: office@digitalinfinity.rs</p>
          </div>
          <p>digitalinfinity.rs</p>
        </div>
      </div>
      <hr className="footer-line"/>
      <div className="footer-copyrights">
        <p>© 2017 - {new Date().getFullYear()} Digital Infinity</p>
        <p>Sva prava zadržana.</p>
      </div>
    </div>
  );
}

export default Footer;