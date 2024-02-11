import PropTypes from 'prop-types';

const Block = ({ image, title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{content}</p>
    </div>
  );
};

Block.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Block;
