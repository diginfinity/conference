import React, { useState } from 'react';
import technologiesImage1 from '../../assets/Image 23/Image 23.png';
import technologiesImage2 from '../../assets/Image 24/Image 24.png';
import technologiesImage3 from '../../assets/Image 25/Image 25.png';

import '../../styles/helpers.scss';

function Technologies() {
  const [mar1, setMar1] = useState('0')
  const [mar2, setMar2] = useState('-10%')
  const [mar3, setMar3] = useState('-10%')

  return (
    <div className="uk-section">
      {/* Bigger screen cards */}
      <div className="uk-container uk-margin-auto uk-padding uk-grid uk-grid-match uk-visible@m">
        <div className="uk-card uk-card-default uk-padding-remove card-width z-index-3 pointer" style={{'margin-left':`${mar1}`}} onClick={() => {setMar1('0'); setMar2('-10%'); setMar3('-10%')}} >
          <div className="uk-card-body uk-padding">
            <hr className="hr-line"/>
            <p>Oprema</p>
            <h3 className="uk-card-title">Tehnologija.</h3>
            <p>U cenu je uključen internet velike brzine kao i back-up link. Objekat poseduje audio/video prezentacionu opremu poslednje generacije. Telefonska oprema je dostupna po potrebi i dogovoru.</p>
          </div>
          
          <div className="uk-card-media-bottom uk-margin-auto-top">
            <img className="uk-width-1-1" src={technologiesImage1} alt="technology"/>
          </div>
        </div>

        <div className="uk-card uk-card-default uk-padding-remove card-width z-index-2 pointer" style={{'margin-left':`${mar2}`}} onClick={() => {setMar1('-10%'); setMar2('0'); setMar3('-10%')}}>
          <div className="uk-card-body uk-padding">
            <hr className="hr-line"/>
            <p>Oprema</p>
            <h3 className="uk-card-title">Oprema za sastanke</h3>
            <p>Tabla sa listovima, bela tabla i markeri su dostupni po potrebi. Na raspolaganju su AV platna i projektori.</p>
          </div>
        
          <div className="uk-card-media-bottom uk-margin-auto-top">
            <img className="uk-width-1-1" src={technologiesImage2} alt="technology"/>
          </div>
        </div>

        <div className="uk-card uk-card-default uk-padding-remove card-width z-index-1 pointer" style={{'margin-left':`${mar3}`}} onClick={() => {setMar1('-10%'); setMar2('-10%'); setMar3('0');}}>
          <div className="uk-card-body uk-padding">
            <hr className="hr-line"/>
            <p>Osoblje</p>
            <h3 className="uk-card-title">Osoblje na recepciji</h3>
            <p>Po potrebi obezbedjujemo profesionalno osoblje koje dočekuje Vaše goste, takodje i pomoć za postavljanje bilo koje AV opreme koja Vam je potrebna.</p>
          </div>

          <div className="uk-card-media-bottom uk-margin-auto-top">
            <img className="uk-width-1-1" src={technologiesImage3} alt="technology"/>
          </div>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="uk-container uk-margin-auto uk-grid uk-grid-match uk-hidden@m">
        <div className="uk-card uk-card-default uk-padding-remove">
          <div className="uk-card-body uk-padding">
            <hr className="hr-line"/>
            <p>Oprema</p>
            <h3 className="uk-card-title">Tehnologija.</h3>
            <p>U cenu je uključen internet velike brzine kao i back-up link. Objekat poseduje audio/video prezentacionu opremu poslednje generacije. Telefonska oprema je dostupna po potrebi i dogovoru.</p>
          </div>
          
          <div className="uk-card-media-bottom uk-margin-auto-top">
            <img className="uk-width-1-1" src={technologiesImage1} alt="technology"/>
          </div>
        </div>

        <div className="uk-card uk-card-default uk-padding-remove">
          <div className="uk-card-body uk-padding">
            <hr className="hr-line"/>
            <p>Oprema</p>
            <h3 className="uk-card-title">Oprema za sastanke</h3>
            <p>Tabla sa listovima, bela tabla i markeri su dostupni po potrebi. Na raspolaganju su AV platna i projektori.</p>
          </div>
        
          <div className="uk-card-media-bottom uk-margin-auto-top">
            <img className="uk-width-1-1" src={technologiesImage2} alt="technology"/>
          </div>
        </div>

        <div className="uk-card uk-card-default uk-padding-remove">
          <div className="uk-card-body uk-padding">
            <hr className="hr-line"/>
            <p>Osoblje</p>
            <h3 className="uk-card-title">Osoblje na recepciji</h3>
            <p>Po potrebi obezbedjujemo profesionalno osoblje koje dočekuje Vaše goste, takodje i pomoć za postavljanje bilo koje AV opreme koja Vam je potrebna.</p>
          </div>

          <div className="uk-card-media-bottom uk-margin-auto-top">
            <img className="uk-width-1-1" src={technologiesImage3} alt="technology"/>
          </div>
        </div>
      </div>

      <div className="uk-container uk-margin-auto uk-grid uk-child-width-1-2@m">
        <div className="uk-padding">
          <h2 className="uk-text-bold">Za čega se obično koriste konferencijske sale</h2>
          <p>Koristite naše sale za sastanke za prezentacije, intervjue, pregovore sa klijentima ili obuke za svoju kompaniju.</p>
        </div>
        <div className="uk-padding">
            <p><span className="uk-text-bold">+ Intervjui</span> - Razgovarajte sa potencijalnim kandidatima bez ograničenja u pogledu broja gostiju koje možete da dovedete.</p>
            <p><span className="uk-text-bold">+ Obuke</span> - Pripremite mesto za organizovanje obuke za Vašu kompaniju.</p>
            <p><span className="uk-text-bold">+ Konferencije</span> - Naše sale za sastanke su savršene za održavanje manjih događaja i konferencija.</p>
        </div>
      </div>
    </div>
  );
}

export default Technologies;