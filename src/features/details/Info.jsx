import React from 'react';

function Info({
  name,
  tagline,
  description,
  abv,
  ibu,
  ebc,
  ph,
  brewers_tips,
  food_pairing,
}) {
  return (
    <div className="beer-info">
      <div className="beer-info__top">
        <div className="beer-info__title">
          <h1>{name}</h1>
          <h3>{tagline}</h3>
          <div className="beer-info__descr">
            <span>{description}</span>
          </div>
        </div>
        <div className="beer-info__spec">
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
      <div className="beer-info__other">
        <div className="beer-info__pairing">
          <h2>Food pairing.</h2>
          <div className="beer-info__pairing-food">
            {food_pairing?.map((food, index) => (
              <span key={index}>{food}</span>
            ))}
          </div>
        </div>
        <div className="beer-info__tips">
          <h2>Tips.</h2>
          <span>{brewers_tips}</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
