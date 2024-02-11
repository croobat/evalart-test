import Block from './Block';

const BlockList = () => {
  // Define block data
  const blocks = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Block 1',
      content: 'hey im block 1',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Block 2',
      content: 'hey im block 2',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Block 3',
      content: 'hey im block 3',
    },
  ];

  return (
    <div>
      {blocks.map((block, index) => (
        <Block key={index} image={block.image} title={block.title} content={block.content} />
      ))}
    </div>
  );
};

export default BlockList;
