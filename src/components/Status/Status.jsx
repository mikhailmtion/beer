import React from 'react';

import { useBeers } from '../../features/beers/use-beers';
import { useInput } from '../../features/controls/use-input';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import Loader from '../Loader/Loader';

function Status() {
  const [beers, { status }] = useBeers();
  const [search] = useInput();
  return (
    <>
      {status === 'rejected' && (
        <ErrorBanner error={'500 Internal Server Error'} />
      )}
      {status === 'loading' && <Loader />}
      {!beers.length && status === 'received' && (
        <ErrorBanner 
          error={'Not found:'} 
          message={search}
        />
      )}
    </>
  );
}

export default Status;
