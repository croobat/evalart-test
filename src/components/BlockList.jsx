import Block from './Block';

const BlockList = () => {
  const blocks = [
    {
      image: 'https://via.placeholder.com/60',
      title: 'TEST LIBRARY',
      subtitle: '',
      content: 'Include a test library with more than 1000 questions and 1000 exercises. These questions are classified by categories and levels of difficulty.',
    },
    {
      image: 'https://via.placeholder.com/60',
      title: 'SUPPORTS ACTUAL CODING',
      subtitle: 'QUESTIONS',
      content: 'Provides programming exercises that allow the candidate to write code in the language of their choice.',
    },
    {
      image: 'https://via.placeholder.com/60',
      title: 'Block 1',
      subtitle: '',
      content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      image: 'https://via.placeholder.com/60',
      title: 'Block 2',
      subtitle: 'SUBTITLE',
      content: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia.',
    },
    {
      image: 'https://via.placeholder.com/60',
      title: 'Block 3',
      subtitle: '',
      content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
  ];

  return (
    <div className="pb-20 bg-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-start max-w-6xl mx-auto">
        {blocks.map((block, index) => (
          <Block
            key={index}
            image={block.image}
            title={block.title}
            subtitle={block.subtitle}
            content={block.content}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockList;
