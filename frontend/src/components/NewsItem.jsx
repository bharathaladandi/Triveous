import React from 'react';
import '../styles/NewsItem.css';


const NewsItem = ({ article, isFavorite, gridView, onFavoriteToggle }) => {
  const { title, image, description } = article;

  return (
    <div className={`news-item ${gridView ? 'grid-view' : 'list-view'}`}>
    {gridView ? (
      <React.Fragment>
        <div className="news-image">
          <img height={150} src={image} alt={title} />
        </div>
        <div className="news-details">
          <h3>{title}</h3>
          <button onClick={onFavoriteToggle}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <h3>{title}</h3>
        <img height={100} src={image} alt={title} />
        <p>{description}</p>
        <button onClick={onFavoriteToggle}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </React.Fragment>
    )}
  </div>
  );
};

export default NewsItem;
