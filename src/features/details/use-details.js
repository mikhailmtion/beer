import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import { clearDetails,loadBeerById,selectDetails } from './details-slice';


export const useDetails = (id) => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  
  useEffect(() => {
    dispatch(loadBeerById(id));
  
    return () => {
      dispatch(clearDetails());
    };
  }, [id, dispatch]);
  
  return details;
};
  