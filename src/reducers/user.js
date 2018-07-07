import {
    DO_LOGIN,
    DO_LOGOUT,
    FAIL_LOGIN,
    OK_LOGIN,
    OK_LOGOUT
} from '../types';

const initialState = {
  token: '',
  name: '',
  id: '',
  isAuthenticated: true,
  error: {
    message: '',
  },
  isFetching: false
};

export default function userReducer (state = initialState, action = {}) {
    switch (action.type) {
        case DO_LOGIN:
            return { ...state, isFetching: true }

        case OK_LOGIN:  
          console.log(action.payload);
            const { data } = action.payload;

            localStorage.setItem('user', JSON.stringify({ ...data }));

            return {
              ...state,
              ...data,
              isAuthenticated: true,
              isFetching:false
            };

        case DO_LOGOUT:
            localStorage.removeItem('user');

            return {
              ...initialState
            };

        case FAIL_LOGIN:
            return state
 
        default:
            return state;

    }
}