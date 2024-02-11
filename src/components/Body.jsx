import BlockList from './BlockList';
import Banner from './Banner';

const Body = () => {
  return (
    <div>
      <Banner />
      <h1 className="text-4xl font-bold ml-5 mb-5">FEATURES</h1>
      <Banner bgColor="blue-800" title="Benefits:" image="https://via.placeholder.com/100"  />
      <BlockList />
    </div>
  );
};

export default Body;
