import React from 'react';
import { useParams } from 'react-router-dom';

import Info from '../../features/details/Info';
import { useDetails } from '../../features/details/use-details';

import ErrorBanner from '../../components/ErrorBanner/ErrorBanner';
import Loader from '../../components/Loader/Loader';

function BeerInfo() {
  const { id } = useParams();

  const { status, currentBeer } = useDetails(id);

  return (
    <div className="content">
      {status === 'rejected' && (
        <ErrorBanner error={'500 Internal Server Error'} />
      )}
      {status === 'loading' && <Loader />}
      <Info {...currentBeer} />
    </div>
  );
}

export default BeerInfo;
