    export const loginSuccess = (user) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: user,
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error,
    };
  };

  export const signUpSuccess = (user) => {
    return {
      type: 'SIGNUP_SUCCESS',
      payload: user,
    };
  };
  
  export const signUpFailure = (error) => {
    return {
      type: 'SIGNUP_FAILURE',
      payload: error,
    };
  };

  export const fetchNewsSuccess = (articles) => {
    return {
      type: 'FETCH_NEWS_SUCCESS',
      payload: articles,
    };
  };
  
  export const toggleFavorite = (articleId) => {
    return {
      type: 'TOGGLE_FAVORITE',
      payload: articleId,
    };
  };
  
  export const toggleGridView = () => {
    return { type: 'TOGGLE_GRID_VIEW' };
  };

  export const login = (email, password) => {
  return async (dispatch) => {
    try {

      const response = await fetch('https://reacttriveous-default-rtdb.firebaseio.com/UserData/json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const userData = await response.json();
      dispatch(loginSuccess(userData));

      
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
       // https://reacttriveous-default-rtdb.firebaseio.com
      const response = await fetch('https://reacttriveous-default-rtdb.firebaseio.com/UserData/json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Sign-up failed');
      }
      const userData = await response.json();
      dispatch(signUpSuccess(userData));
    } catch (error) {
      dispatch(signUpFailure(error.message));
    }
  };
};