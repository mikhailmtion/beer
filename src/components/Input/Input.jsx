import React from 'react';

import { useInput } from '../../features/controls/use-input';

function Input() {
  const [search, handleSearch] = useInput();
  return (
    <div className="input">
      <input onChange={handleSearch} value={search}  type="text" id="search" placeholder="Search" />
    </div>
  );
}

export default Input;
