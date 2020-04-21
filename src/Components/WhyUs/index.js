import React from 'react';

import '../../styles/helpers.scss';

function Why() {
  return (
    <div className="uk-section background-gray-1">
      <div className="uk-container uk-margin-auto uk-grid uk-child-width-1-2@m">
        <div className="uk-padding">
          <p className="uk-text-bold uk-margin-remove uk-padding-small uk-padding-remove-left">Samo se pojavite i započnite.</p>
          <h2 className="uk-text-bold uk-margin-remove-top uk-margin-bottom">Zašto odabrati naše<br/> konferencijske sale?</h2>
        </div>

        <div className="uk-padding uk-padding-remove-vertical">
          <div className="uk-grid uk-child-width-1-2@m">
            <div>
              <p className="uk-margin-medium-top uk-margin-remove-bottom uk-padding-small uk-padding-remove-left">Jednostavnost</p>
              <hr className="hr-line uk-margin-remove"/>
              <h3 className="uk-text-bold uk-margin-remove uk-padding-small uk-padding-remove-left">Dostupno na sat!</h3>
              <p className="uk-margin-remove-top">Iznajmite sale za sastanke ili učionicu na sat, onoliko dugo koliko Vam je potrebno.</p>
            </div>

            <div>
              <p className="uk-margin-medium-top uk-margin-remove-bottom uk-padding-small uk-padding-remove-left">Dostupnost</p>
              <hr className="hr-line uk-margin-remove"/>
              <h3 className="uk-text-bold uk-margin-remove uk-padding-small uk-padding-remove-left">Veliki broj parking mesta.</h3>
              <p className="uk-margin-remove-top">Objekat je lociran na jednoj od glavnih arterija grada, sa većim brojem parking mesta.</p>
            </div>
          </div>

          <div className="uk-grid uk-child-width-1-2@m">
            <div>
              <p className="uk-margin-medium-top uk-margin-remove-bottom uk-padding-small uk-padding-remove-left">Prilagodljivost</p>
              <hr className="hr-line uk-margin-remove"/>
              <h3 className="uk-text-bold uk-margin-remove uk-padding-small uk-padding-remove-left">Prilagodljiv prostor.</h3>
              <p className="uk-margin-remove-top">Promenite raspored u salama u skladu sa potrebama održavanja Vašeg sastanka ili prezentacije.</p>
            </div>
            
            <div>
              <p className="uk-margin-medium-top uk-margin-remove-bottom uk-padding-small uk-padding-remove-left">Opremljenost</p>
              <hr className="hr-line uk-margin-remove"/>
              <h3 className="uk-text-bold uk-margin-remove uk-padding-small uk-padding-remove-left">Spremno za upotrebu.</h3>
              <p className="uk-margin-remove-top">Sala će već biti uređena za Vas kada stignete uključujući tehničku opremu za prezentacije i brz optički internet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;