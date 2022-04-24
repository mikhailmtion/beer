import React from 'react';
import { useNavigate } from 'react-router-dom';


function Card({ id, name, first_brewed, tagline, abv, ibu, ebc, ph }) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/beer/${id}`)}>
      <div className="card__info">
        <p>{first_brewed}</p>
        <h2>{name.substring(0, 16)}</h2>
        <h3>{tagline.replace(/\./g, '')}</h3>
      </div>
      <div className="card__spec">
        <ul>
          <li>
            <b>abv</b>
            <span>{abv || 'N/A'}</span>
          </li>
          <li>
            <b>ibu</b>
            <span>{ibu || 'N/A'}</span>
          </li>
          <li>
            <b>ebc</b>
            <span>{ebc || 'N/A'}</span>
          </li>
          <li>
            <b>ph</b>
            <span>{ph || 'N/A'}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
