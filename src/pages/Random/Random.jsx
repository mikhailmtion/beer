import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import RandomCard from '../../components/RandomCard/RandomCard';
import Loader from '../../components/Loader/Loader';

import { useRandom } from '../../features/random/use-random';
import { loadRandomBeer } from '../../features/random/random-slice';

function Random() {
  const dispatch = useDispatch();
  const { status, randomBeer } = useRandom();
  const randomHandle = () => dispatch(loadRandomBeer());
  return (
    <div className="content">
      <div className="random">
        <div className="random__circle">
          {status === 'loading' && <Loader />}
          {status === 'rejected' && '500 Internal Server Error'}
          {status === 'received' && (
            <div className="random__circle-action">
              <RandomCard {...randomBeer} />
              <Button randomHandle={randomHandle} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Random;
