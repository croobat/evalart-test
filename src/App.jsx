import { useState, useEffect } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    // hide header on scroll
    const handleScroll = (() => {
      let timeout;

      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          const currentScrollPos = window.scrollY;
          if (currentScrollPos > 100) {
            setHideHeader(true);
          } else {
            setHideHeader(false);
          }
        }, 100);
      };
    })();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={'sticky top-0 z-50 bg-white shadow-lg transition-transform duration-300 transform '
        + (hideHeader ? '-translate-y-20' : 'translate-y-0')}>
        <Header hide={hideHeader} />
        <Navbar />
      </div>
      <Body />
      <Footer />
    </div>
  );
};

export default App;
