import PropTypes from 'prop-types';

function Header({ hide }) {
  return (
    <header className={hide ? 'hidden' : 'visible'}>
      <p>hey im a header</p>
    </header>
  );
}

Header.propTypes = {
  hide: PropTypes.bool,
};

export default Header;
