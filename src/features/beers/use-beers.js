import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectControls } from '../controls/controls-slice';

import { loadBeers, selectVisibleBeers, selectBeersInfo} from './beers-slice';

export const useBeers = (page) => {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const beers = useSelector(state => selectVisibleBeers(state, controls));
  const { status, error, qty } = useSelector(selectBeersInfo);
  

  useEffect(() => {

    dispatch(loadBeers(page));

  }, [page, dispatch]);

  return [beers, { status, error, qty }];
};
