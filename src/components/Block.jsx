import PropTypes from 'prop-types';

const Block = ({ image, title, subtitle, content }) => {
  return (
    <div className="flex flex-col items-center justify-start px-4 md:px-12 bg-gray-200 md:shadow-lg pb-4 h-full">
      <div className="flex flex-col items-center">
        <img src={image} alt={title} className="relative top-20" />
        <img className="rounded-md" src={'http://cdn.evalart.com/wp-content/themes/twentyfourteen-child/images/find_Best_bg.png'} />
      </div>
      <div className="relative flex flex-row items-center justify-center bg-gray-200 w-full">
        <div className="flex-grow border-t-2 border-gray-400"></div>
        <h3 className="px-4 text-lg font-bold text-center mt-4">{title.toUpperCase()}</h3>
        <div className="flex-grow border-t-2 border-gray-400"></div>
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
