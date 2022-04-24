import { useSelector, useDispatch } from 'react-redux';

import { useEffect} from 'react';

import {
  clearRandom,
  loadRandomBeer,
  selectRandom,
} from './random-slice';

export const useRandom = () => {
  const dispatch = useDispatch();
  const randomBeer = useSelector(selectRandom);


  useEffect(() => {
    dispatch(loadRandomBeer());
    return () => {
      dispatch(clearRandom());
    };
  }, [ dispatch]);

  return randomBeer;
};
