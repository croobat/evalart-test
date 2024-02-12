import PropTypes from 'prop-types';

const Feature = ({ image, title, content }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200">
      <div className="m-20 flex flex-col items-center">
        <img src={image} alt={title} className="rounded-md opacity-50" />
        <div className="absolute">
          <h1 className="text-xl font-bold text-center text-blue-800">{title}</h1>
          <p className="mt-2 text-center text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

Feature.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Feature;