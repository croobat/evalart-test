import { useState } from 'react';
import SvgLogo from './SvgLogo';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center h-16 bg-white relative shadow-sm font-bold" role="navigation">
      <div className="mx-4">
        <SvgLogo />
      </div>
      {/* hamburger menu */}
      <div className="mx-4 px-3 py-1 cursor-pointer md:hidden bg-orange-400 rounded-md" onClick={toggleMenu}>
        <FaIcon className="text-white" size="lg" icon={faBars} />
      </div>
      {/* responsive menu */}
      <div className={`md:hidden text-center
  absolute top-16 left-0 right-0 bg-blue-600 text-white transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
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
    </nav>
  );
}

export default Navbar;
