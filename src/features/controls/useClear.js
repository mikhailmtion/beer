import {useDispatch} from 'react-redux';

import { clearControls } from './controls-slice';

export const useClear = () => {
  const dispatch = useDispatch();
  
  const clear = () => dispatch(clearControls());
  
  return () => dispatch(clear());
};
  