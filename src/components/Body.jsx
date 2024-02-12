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
      <BlockList />
    </div>
  );
};

export default Body;
