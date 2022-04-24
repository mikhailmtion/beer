import {useSelector, useDispatch} from 'react-redux';

import { selectStyle, setStyle } from './controls-slice';


export const useStyle = () => {
  const dispatch = useDispatch();
  const style = useSelector(selectStyle);

  const handleSelect = (reg) => {
    dispatch(setStyle(reg?.target.value || ''));
  };

  return [style, handleSelect];
};
