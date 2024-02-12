import PropTypes from 'prop-types';

import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faSquareFacebook, faSquareTwitter, faLinkedin, faInstagram, faSquareGooglePlus } from '@fortawesome/free-brands-svg-icons';

const SectionContainer = ({ children }) => {
  return <section className={'flex items-center mr-2 pr-2 sm:border-r border-blue-600 justify-center'}>{children}</section>;
};

SectionContainer.propTypes = {
  children: PropTypes.node,
};

const IconContainer = ({ icon }) => {
  return (
    <div className="px-2 py-1 text-white bg-blue-800">
      <FaIcon icon={icon} size="lg" />
    </div>
  );
};

IconContainer.propTypes = {
  icon: PropTypes.object,
};

const Header = () => {
  const LANGUAGES = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
  ];

  return (
    <header>
      <div className="flex flex-col items-center justify-center p-2 text-white bg-blue-800 font-medium">
        <select className="bg-blue-800 text-white border border-white align-middle m-2 px-2 text-sm">
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap justify-center text-xs">
          <SectionContainer>
            <FaIcon icon={faLocationDot} />
            <span className="ml-2">Global Presence</span>
          </SectionContainer>
          <SectionContainer>
            <FaIcon icon={faClock} />
            <span className="ml-2">Platform Available 24/7</span>
          </SectionContainer>
          <SectionContainer>
            <FaIcon icon={faEnvelope} />
            <span className="ml-2">company@mail.com</span>
          </SectionContainer>
          <SectionContainer>
            <IconContainer icon={faSquareFacebook} />
            <IconContainer icon={faSquareTwitter} />
            <IconContainer icon={faLinkedin} />
            <IconContainer icon={faInstagram} />
            <IconContainer icon={faSquareGooglePlus} />
          </SectionContainer>
        </div>
      </div>
    </header>
  );
};

export default Header;
