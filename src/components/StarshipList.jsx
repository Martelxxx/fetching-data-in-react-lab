import React from 'react';
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  return (
    <div>
      <h2>Starships</h2>
      <p>Number of results: ({starships.length})</p>
      <ul className="starship-list">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </ul>
    </div>
  );
};

export default StarshipList;
