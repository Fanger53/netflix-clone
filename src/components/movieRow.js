import React from 'react';
import './movieRow.scss';

const MRow = ({title, items}) => {
  return (
    <div>
      <h2>
        {title}
      </h2>
      <div className="movieRow--listarea" >
        {items.results.length > 0 && items.results.map((item, key) => (
          <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
        ))}
      </div>
    </div>
  );
}

export default MRow;