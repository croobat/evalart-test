const Footer = () => {
  const sections = {
    support: ['User Guide', 'FAQ', 'Contact Us'],
    legal: ['Privacy Policy', 'Terms of Service'],
    company: ['About Us', 'Careers', 'Press', 'Blog'],
    contact: ['Contact Us', 'Company Inc.'],
  };

  const bottomLinks = [
    'HOME',
    'HOW IT WORKS',
    'FEATURES',
    'REQUEST A QUOTE',
    'FREE TRIAL',
    'LOGIN',
    'CONTACT US',
    'JOB DESCRIPTIONS',
  ];

  return (
    <>
      <footer>
        {/* Responsive grid with sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:grid-cols-2 bg-blue-950 text-white py-6 px-4">
          {Object.entries(sections).map(([sectionName, sectionLinks], index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold mb-2">{sectionName.toUpperCase()}</h3>
              {sectionLinks.map((link, linkIndex) => (
                <p key={linkIndex} className="text-xs uppercase">{link}</p>
              ))}
            </div>
          ))}
        </div>
        {/* Bottom links */}
        <div className="bg-gray-900">
          <div className="hidden md:flex justify-between items-center px-4 py-6">
            {bottomLinks.map((link, index) => (
              <p key={index} className="text-white text-xs uppercase">{link}</p>
            ))}
          </div>
          <p className="text-center text-gray-400 py-6 text-xs">© 2024 COMPANY, INC. ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
