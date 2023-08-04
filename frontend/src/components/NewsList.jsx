import React from 'react';
import NewsItem from './NewsItem';
import '../styles/NewsList.css';


const NewsList = ({ articles, favorites, gridView, onFavoriteToggle }) => {

  return (
    <div className={`news-container ${gridView ? 'grid-view' : 'list-view'}`}>
      {articles.map((article) => (
        <NewsItem
          key={article.id}
          article={article}
          isFavorite={favorites.includes(article.id)}
          gridView={gridView}
          onFavoriteToggle={() => onFavoriteToggle(article.id)}
        />
      ))}
    </div>
  );
};
export default NewsList;
