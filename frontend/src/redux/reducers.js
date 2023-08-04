const initialState = {
  currentUser: null,
  loginError: null,
  signUpError: null,
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
    default:
      return state;
  }
};
