import { useState } from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Reservations from './components/Reservations';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Menu />
      <About />
      <Reservations />
      <Contact />
    </div>
  );
}

export default App;
