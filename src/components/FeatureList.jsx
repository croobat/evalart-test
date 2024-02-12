import { useState } from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Feature from './Feature';

const FeatureList = () => {
  // Define feature data
  const features = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Find the Best',
      content: 'Evalart\'s on-line evaluations can pre-filter candidates, identify the best candidates, and significantly reduce the number of candidates who require an interview (online assessments allow you to filter out up to 80% of applicants, so you can focus on the best 20%).',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Feature 2',
      content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Feature 3',
      content: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Feature 4',
      content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Feature 5',
      content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Feature 6',
      content: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Feature 7',
      content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Feature 8',
      content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Feature 9',
      content: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, Math.ceil(features.length / 3) - 1));
  };

  const startIndex = currentIndex * 3;
  const endIndex = Math.min(startIndex + 3, features.length);

  return (
    <div className="mb-20">
      {features.slice(startIndex, endIndex).map((feature, index) => (
        <Feature key={index} image={feature.image} title={feature.title} content={feature.content} />
      ))}

      <div className=" absolute w-full text-center flex flex-col items-center bg-gray-200 pb-4">
        <button
          onClick={nextSlide}
          disabled={endIndex === features.length}>
          <FaIcon icon={faLongArrowRight} className={endIndex === features.length ? 'text-gray-400' : ''} />
        </button>
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}>
          <FaIcon icon={faLongArrowLeft} className={currentIndex === 0 ? 'text-gray-400' : ''} />
        </button>
      </div>
    </div>
  );
};

export default FeatureList;
