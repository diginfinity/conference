import React from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import WhyUs from './Components/WhyUs';
import Equipment from './Components/Equipment';
import Plan from './Components/Plan';
import Conference from './Components/Conference';
import Classroom from './Components/Classroom';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import "uikit/dist/css/uikit.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <WhyUs />
      <Equipment />
      <Plan />
      <Conference />
      <Classroom />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
