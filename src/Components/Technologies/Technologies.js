import React, { useState } from 'react';
import technologiesImage1 from '../../assets/Image 23/Image 23.png';
import technologiesImage2 from '../../assets/Image 24/Image 24.png';
import technologiesImage3 from '../../assets/Image 25/Image 25.png';

import './technologies.scss';

function Technologies() {
  const [mar1, setMar1] = useState('0')
  const [mar2, setMar2] = useState('-10%')
  const [mar3, setMar3] = useState('-10%')

  return (
    <div className="technologies">
      <div className="technologies-section-1">
        <div className="technologies-item-1" style={{'margin-left':`${mar1}`}} onClick={() => {setMar1('0'); setMar2('-10%'); setMar3('-10%')}} >
          <div className="item-text">
            <hr className="hr-line"/>
            <p>Oprema</p>
            <h3>Tehnologija.</h3>
            <p>U cenu je uključen internet velike brzine kao i back-up link. Objekat poseduje audio/video prezentacionu opremu poslednje generacije. Telefonska oprema je dostupna po potrebi i dogovoru.</p>
          </div>
          
          <img src={technologiesImage1} alt="home"/>
        </div>
        <div className="technologies-item-2" style={{'margin-left':`${mar2}`}} onClick={() => {setMar1('-10%'); setMar2('0'); setMar3('-10%')}}>
          <div className="item-text">
            <hr className="hr-line"/>
            <p>Oprema</p>
            <h3>Oprema za sastanke</h3>
            <p>Tabla sa listovima, bela tabla i markeri su dostupni po potrebi. Na raspolaganju su AV platna i projektori.</p>
          </div>
        
          <img src={technologiesImage2} alt="home" />
        </div>
        <div className="technologies-item-3" style={{'margin-left':`${mar3}`}} onClick={() => {setMar1('-10%'); setMar2('-10%'); setMar3('0');}}>
          <div className="item-text">
            <hr className="hr-line"/>
            <p>Osoblje</p>
            <h3>Osoblje na recepciji</h3>
            <p>Po potrebi obezbedjujemo profesionalno osoblje koje dočekuje Vaše goste, takodje i pomoć za postavljanje bilo koje AV opreme koja Vam je potrebna.</p>
          </div>

          <img src={technologiesImage3} alt="home" />
        </div>
      </div>

      <div className="technologies-section-2">
        <div className="technologies-item-2">
          <h3>Za čega se obično koriste konferencijske sale</h3>
          <p>Koristite naše sale za sastanke za prezentacije, intervjue, pregovore sa klijentima ili obuke za svoju kompaniju.</p>
        </div>
        <div className="technologies-item-2">
            <p><b>+ Intervjui</b> - Razgovarajte sa potencijalnim kandidatima bez ograničenja u pogledu broja gostiju koje možete da dovedete.</p>
            <p><b>+ Obuke</b> - Pripremite mesto za organizovanje obuke za Vašu kompaniju.</p>
            <p><b>+ Konferencije</b> - Naše sale za sastanke su savršene za održavanje manjih događaja i konferencija.</p>
        </div>
      </div>
    </div>
  );
}

export default Technologies;