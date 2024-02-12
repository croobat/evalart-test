import Banner from './Banner';
import FeatureList from './FeatureList';
import BlockList from './BlockList';

const Body = () => {
  return (
    <div>
      <Banner />
      <h1 className="text-4xl font-bold ml-5 my-5">FEATURES</h1>
      <Banner bgColor="blue-800" title="Benefits:" image="https://via.placeholder.com/100"  />
      <FeatureList />
      <h1 className="text-2xl py-5 text-center text-blue-800 font-medium bg-gray-200">FEATURES</h1>
      <BlockList />
    </div>
  );
};

export default Body;
