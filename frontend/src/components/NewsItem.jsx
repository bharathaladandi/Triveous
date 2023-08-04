import React from 'react';
import '../styles/NewsItem.css';
import { Image, Button  } from '@chakra-ui/react'
const NewsItem = ({ article, isFavorite, gridView, onFavoriteToggle }) => {
  const { title, image, description } = article;

  return (
    <div className={`news-item ${gridView ? 'grid-view' : 'list-view'}`}>
    {gridView ? (
      <React.Fragment>
        <div className="news-image">
          <img boxSize='150px'src={image} alt={title} />
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
        <img height={10} boxSize='50px' src={image} alt={title} />
        <p>{description}</p>
        <Button onClick={onFavoriteToggle}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </React.Fragment>
    )}
  </div>
  );
};

export default NewsItem;
