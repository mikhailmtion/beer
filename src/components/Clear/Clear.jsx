import React from 'react';

import { useClear } from '../../features/controls/useClear';

function Clear() {
  const clear = useClear();
  return (
    <div className="clear" onClick={clear}>
      <span>Clear</span>
    </div>
  );
}

export default Clear;
