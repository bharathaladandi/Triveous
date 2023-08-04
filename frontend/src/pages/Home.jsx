import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toggleFavorite, toggleGridView } from '../redux/action';
import NewsList from '../components/NewsList';
import ToggleButton from '../components/ToggleButton';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const newsArticles = useSelector((state) => state.app.newsArticles);
  const favorites = useSelector((state) => state.app.favorites);
  const [gridView, setGridView] = useState(false);

  useEffect(() => {

    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c016e7fa3204a229b71a37b45a1eb23');
        const articles = response.data.articles.map((article, index) => ({
          id: index,
          title: article.title,
          image: article.urlToImage,
          description: article.description,
        }));
        setLoading(false);
        dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: articles });
      } catch (error) {
        console.error('Failed to fetch news articles:', error);
        setLoading(false);
        dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: [] });
      }
    };

    fetchArticles();
  }, [dispatch]);

    const handleFavoriteToggle = (articleId) => {
      dispatch(toggleFavorite(articleId));
    };
    
    const handleToggle = () => {
      setGridView((prevGridView) => !prevGridView);
    };
  

  return (
    <div>
    <ToggleButton onClick={handleToggle} gridView={gridView} />
    {loading ? (
      <div>Loading...</div>
    ) : (
      <NewsList
        articles={newsArticles}
        favorites={favorites}
        gridView={gridView}
        onFavoriteToggle={handleFavoriteToggle}
      />
    )}
  </div>
  );
};
