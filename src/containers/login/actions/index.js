import {
    DO_LOGIN_REQUEST,
    DO_LOGIN_IN_PROGRESS,
    DO_LOGIN_SUCCESS,
    DO_LOGIN_FAILED
} from '../constants';

const doLogin = payload => ({
    type: DO_LOGIN_REQUEST,
    payload
});
const doLoginInProgress = () => ({
    type: DO_LOGIN_IN_PROGRESS
});
const doLoginSuccess = result => ({
    type: DO_LOGIN_SUCCESS,
    result
});
const doLoginFailed = error => ({
    type: DO_LOGIN_FAILED,
    error
});

export {
    doLogin,
    doLoginSuccess,
    doLoginFailed,
    doLoginInProgress,
};
