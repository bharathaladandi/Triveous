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

  export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://blossombackend.onrender.com/users/login', {
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
      const response = await fetch('https://blossombackend.onrender.com/users/signup', {
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