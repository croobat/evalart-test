import PropTypes from 'prop-types';

const Block = ({ image, title, subtitle, content }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 bg-gray-200">
      <div className="flex flex-col items-center">
        <img src={image} alt={title} className="relative top-20" />
        <img className="rounded-md" src={'http://cdn.evalart.com/wp-content/themes/twentyfourteen-child/images/find_Best_bg.png'} />
      </div>
      <div className="relative">
        <h3 className="relative z-10 inline-block px-4 text-lg font-bold text-center mt-4">{title.toUpperCase()}</h3>
      </div>
      {subtitle && <h4 className="text-md font-bold text-center mt-1">{subtitle.toUpperCase()}</h4>}
      <p className="mt-2 text-center text-gray-600 mt-4">{content}</p>
    </div>
  );
};

Block.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Block.defaultProps = {
  subtitle: '',
};

export default Block;
