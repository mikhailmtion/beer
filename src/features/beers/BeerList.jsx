import React, { useState } from 'react';


import Card from '../../components/Card/Card';
import Status from '../../components/Status/Status';
import Pagination from '../../components/Pagination/Pagination';

import { useBeers } from './use-beers';

function BeerList() {
  const [page, setPage] = useState(1);
  const [beers, { status }] = useBeers(page);

  return (
    <>
      <div className="content__list">
        <Status />
        {status === 'received' && (
          <>
            {beers.map((beer) => (
              <Card key={beer.id} {...beer} />
            ))}
          </>
        )}
      </div>
      {beers.length <= 6 || <Pagination page={page} setPage={setPage} />}
    </>
  );
}

export default BeerList;
