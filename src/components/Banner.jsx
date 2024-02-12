import PropTypes from 'prop-types';

const Banner = ({ bgColor, title, image }) => {
  return (
    <div>
      <div className={`bg-${bgColor} text-white text-center py-20`}>
        {image && <img src={image} alt="banner" className="mx-auto mb-5" />}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

Banner.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
};

Banner.defaultProps = {
  bgColor: 'gray-500',
  title: 'Welcome!',
  image: '',
};

export default Banner;
