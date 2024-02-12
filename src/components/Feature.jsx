import PropTypes from 'prop-types';

const Feature = ({ image, title, content }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-300">
      <div className="my-20 flex flex-col items-center">
        <img src={image} alt={title} className="rounded-md opacity-80" />
        <div className="absolute">
          <h1 className="text-xl font-bold text-center text-blue-800">{title}</h1>
          <p className="mt-2 mx-4 text-center text-gray-600 max-w-72">{content}</p>
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
