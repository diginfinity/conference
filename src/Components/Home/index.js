import React from 'react';
import homeImage from '../../assets/Image 22/Image 22.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../../styles/helpers.scss';

function Home() {
  return (
    <div className="uk-section">
      <div className="uk-container uk-margin-auto uk-grid uk-flex-bottom uk-child-width-1-2@m">
        <div className="uk-padding">
          <p className="uk-text-small">
            Koristite našu salu za sastanke u Novom Sadu za prezentacije, intervjue, pregovore sa klijentima ili obuke za svoju kompaniju.
          </p>
          <p className="uk-heading-medium">
            Digital Infinity konferencijska sala i učionica
          </p>
          <p className="uk-text-bold">
            Saznajte više <span className="uk-margin-small-left"><FontAwesomeIcon icon={faArrowRight} /></span>
          </p>
        </div>

        <div className="uk-padding">
          <img src={homeImage} alt="home" />
        </div>
      </div>
    </div>
  );
}

export default Home;
