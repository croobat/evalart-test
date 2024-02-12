import { useState, useEffect } from 'react';
import SvgLogo from './SvgLogo';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex justify-between items-center h-28 bg-white relative shadow-lg font-bold ${isSticky ? 'sticky top-0 z-50' : ''} md:flex-col md:justify-around lg:flex-row`} role="navigation">
      <div className="mx-4">
        <SvgLogo />
      </div>
      {/* hamburger menu */}
      <div className="mx-4 px-3 py-1 cursor-pointer md:hidden bg-orange-400 rounded-md" onClick={toggleMenu}>
        <FaIcon className="text-white" size="lg" icon={faBars} />
      </div>
      {/* responsive menu */}
      {menuOpen && (
        <div className="md:hidden text-center absolute top-16 left-0 right-0 bg-blue-600 text-white transition-all duration-300 max-h-96 overflow-hidden">
          <ul className="flex flex-col items-center">
            <li className="py-2"><a href="#">Home</a></li>
            <li className="py-2"><a href="#">How It Works</a></li>
            <li className="py-2"><a href="#">Features</a></li>
            <li className="py-2"><a href="#">Test Library</a></li>
            <li className="py-2"><a href="#">Pricing</a></li>
            <li className="py-2"><a href="#">Free Trial</a></li>
            <li className="py-2"><a href="#">Login</a></li>
          </ul>
        </div>
      )}
      {/* inline menu for md and larger */}
      <ul className="hidden md:flex items-center font-medium">
        <li className="mx-4"><a className="hover:text-orange-400" href="#">Home</a></li>
        <li className="mx-4"><a className="hover:text-orange-400" href="#">How It Works</a></li>
        <li className="mx-4"><a className="hover:text-orange-400" href="#">Features</a></li>
        <li className="mx-4"><a className="hover:text-orange-400" href="#">Test Library</a></li>
        <li className="mx-4"><a className="hover:text-orange-400" href="#">Pricing</a></li>
        <li className="mx-4"><a className="hover:text-orange-400" href="#">Free Trial</a></li>
        <li className="mx-4"><a className="hover:text-orange-400" href="#">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
