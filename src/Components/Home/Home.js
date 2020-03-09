import React from 'react';
import homeImage from '../../assets/Image 22/Image 22.png';

import './home.scss';

function Home() {
  return (
    <div className="home">
      <div className="home-text">
        <p>
          Koristite našu salu za sastanke u Novom Sadu za prezentacije, intervjue, pregovore sa klijentima ili obuke za svoju kompaniju.
        </p>
        <h2>
          Digital Infinity konferencijska sala i učionica
        </h2>
        <p>Saznajte više <span>&rarr;</span></p>
      </div>

      <div className="home-image">
        <img src={homeImage} alt="home" />
      </div>
    </div>
  );
}

export default Home;