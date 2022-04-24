import React from 'react';

import { useInput } from '../../features/controls/use-input';
import { useStyle } from '../../features/controls/use-style';

function MainBanner() {
  const [search] = useInput();
  const [style] = useStyle();
  return (
    <div>
      {(search.length || style.length) <= 0 && <h1 className="content__title">Find the perfect beer.</h1>}
    </div>
  );
}

export default MainBanner;