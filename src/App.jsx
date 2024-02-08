import { useState, useEffect } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    // Implement scroll listener to toggle hideHeader state
    const handleScroll = () => {
      // Logic to determine whether to hide the header on scroll
      // Update hideHeader state accordingly
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 100) {
        setHideHeader(true);
      }
      else {
        setHideHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header hide={hideHeader} />
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
