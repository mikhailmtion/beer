import React from 'react';

import { useSelector} from 'react-redux';

import Clear from '../../components/Clear/Clear';

import Input from '../../components/Input/Input';
import Sort from '../../components/Sort/Sort';

import { controlsInfo } from './controls-slice';

function Controls() {
  const { search, style } = useSelector(controlsInfo);

  return (
    <div className="content__top">
      <Input />
      <Sort /> 
      {(search || style) && <Clear/>}
    </div>
  );
}

export default Controls;
