import React from 'react';

import { useStyle } from '../../features/controls/use-style';

function Sort() {
  const stylesNames = ['Ale', 'IPA', 'Porter', 'Weisse'];
  const [style, handleSelect] = useStyle();
  return (
    <div className="sort">
      <select onChange={handleSelect} required>
        <option value="">All</option>
        {stylesNames.map((el, index) => (
          <option key={index}>{el}</option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
