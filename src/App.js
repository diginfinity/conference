import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Why from './Components/Why/Why';
import Technologies from './Components/Technologies/Technologies';
import Plan from './Components/Plan/Plan';
import Conference from './Components/Conference/Conference';
import Classroom from './Components/Classroom/Classroom';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import './App.scss';
import './variables.scss'

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Why />
      <Technologies />
      <Plan />
      <Conference />
      <Classroom />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
