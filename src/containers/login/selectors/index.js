import { createSelector } from 'reselect';

const loginReducer = state => state.loginReducer;

const login_inProgress = () =>
    createSelector(
        loginReducer,
        currentState => currentState.inProgress
    );

const login_error = () =>
    createSelector(
        loginReducer,
        currentState => currentState.error
    );

export { login_inProgress, login_error };