import Api from '../api';
import {
    DO_LOGIN,
    DO_LOGOUT,
    SUCCESS_LOGIN,
    FAIL_LOGIN,
    OK_LOGIN,
    OK_LOGOUT
} from '../types';

export const userLoggedIn = payload => ({
    type: OK_LOGIN,
    payload
});

export const doLogin = () => ({
    type: DO_LOGIN
});

export const doLogout = () => ({
    type: DO_LOGOUT
});

export const failLogin = () => ({
    type: FAIL_LOGIN
});

// Action creators

export const login = credentials => dispatch => {
    dispatch(doLogin());

    return Api.login(credentials)
        .then(res => dispatch(userLoggedIn(res)))
        .catch(res => dispatch(failLogin(res)));
};

export const logout = () => dispatch => {
    return dispatch(doLogout())
}