import React from 'react';
import { useNavigate } from 'react-router-dom';


function RandomCard({id,name,tagline}) {
  const navigate = useNavigate();
  return (
    <div className="random-card" onClick={() => navigate(`/beer/${id}`)}>
      <h1>{name?.substring(0, 16)}</h1>
      <h3>{tagline?.replace(/\./g, '')}</h3>
    </div>
  );
}

export default RandomCard;