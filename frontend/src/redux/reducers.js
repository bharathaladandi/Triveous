const initialState = {
  currentUser: null,
  loginError: null,
  signUpError: null,
  newsArticles: [],
  favorites: [],
  gridView: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        loginError: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        currentUser: null,
        loginError: action.payload,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        signUpError: null,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        currentUser: null,
        signUpError: action.payload,
      };
    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        newsArticles: action.payload,
      };
    case 'TOGGLE_FAVORITE':
      const articleId = action.payload;
      const isFavorite = state.favorites.includes(articleId);

      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((id) => id !== articleId)
          : [...state.favorites, articleId],
      };
    case 'TOGGLE_GRID_VIEW':
      return {
        ...state,
        gridView: !state.gridView,
      };
    default:
      return state;
  }
};
