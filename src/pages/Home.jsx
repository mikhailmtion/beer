import React from 'react';

import MainBanner from '../components/MainBanner/MainBanner';


import BeerList from '../features/beers/BeerList';
import Controls from '../features/controls/Controls';

function Home() {
  return (
    <div className="content">
      <MainBanner/>
      <Controls />
      <BeerList />
    </div>
  );
}

export default Home;
