import React from 'react';

import './why.scss';

function Why() {
  return (
    <div className="why">
      <div className="why-container-1">
        <p>Samo se pojavite i započnite.</p>
        <h2 className="why-title">Zašto odabrati naše<br/> konferencijske sale?</h2>
      </div>

      <div className="why-container-2">
        <div className="why-section-1">
          <div className="why-item">
            <p>Jednostavnost</p>
            <hr/>
            <h3>Dostupno na sat!</h3>
            <p>Iznajmite sale za sastanke ili učionicu na sat, onoliko dugo koliko Vam je potrebno.</p>
          </div>
          <div className="why-item">
            <p>Dostupnost</p>
            <hr/>
            <h3>Veliki broj parking mesta.</h3>
            <p>Objekat je lociran na jednoj od glavnih arterija grada, sa većim brojem parking mesta.</p>
          </div>
        </div>

        <div className="why-section-2">
          <div className="why-item">
            <p>Prilagodljivost</p>
            <hr/>
            <h3>Prilagodljiv prostor.</h3>
            <p>Promenite raspored u salama u skladu sa potrebama održavanja Vašeg sastanka ili prezentacije.</p>
          </div>
          <div className="why-item">
            <p>Opremljenost</p>
            <hr/>
            <h3>Spremno za upotrebu.</h3>
            <p>Sala će već biti uređena za Vas kada stignete uključujući tehničku opremu za prezentacije i brz optički internet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;