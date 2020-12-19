/* eslint-disable no-case-declarations */
import userAPI from 'src/services/userAPI';

const REGISTER = 'ssscv/user/REGISTER';
const REGISTER_SUCCESS = 'ssscv/user/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'ssscv/user/REGISTER_FAILURE';
const LOGIN = 'ssscv/user/LOGIN';
const LOGIN_SUCCESS = 'ssscv/user/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'ssscv/user/LOGIN_FAILURE';

const LOGOUT = 'ssscv/user/LOGOUT';

export const register = () => ({ type: REGISTER });
export const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, user });
export const registerFail = (error) => ({ type: REGISTER_FAILURE, error });

export const login = () => ({ type: LOGIN });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const loginFail = (error) => ({ type: LOGIN_FAILURE, error });

export const logout = () => ({ type: LOGOUT });

const localUser = localStorage.getItem('user');
let initialState = localUser
  ? { user: JSON.parse(localUser), isLogged: true }
  : { user: null, isLogged: false };

initialState = {
  ...initialState,
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      const { user } = action;
      localStorage.setItem('user', JSON.stringify(user));
      return {
        ...state,
        user,
        isLogged: true,
        isFetching: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLogged: false,
        error: action.error,
        isFetching: false
      };
    case LOGIN:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case LOGOUT:
      localStorage.clear();
      return {
        user: null,
        isLogged: false
      };
    default:
      return state;
  }
};

export const registerRequest = (user) => (dispatch) => {
  dispatch(register());
  return userAPI.register(user).then((res) => dispatch(registerSuccess(res.data)))
    .catch((error) => dispatch(registerFail(error)));
};

export const loginRequest = (user) => (dispatch) => {
  dispatch(login());
  return userAPI.login(user).then((res) => dispatch(loginSuccess(res.data)))
    .catch((error) => dispatch(loginFail(error)));
};

export const logoutReq = () => (dispatch) => {
  return dispatch(logout());
};
