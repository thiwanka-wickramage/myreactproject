import { put, takeLatest, call, all } from "redux-saga/effects";
import apiHandler from "../../../middlewares/apiHandler";
import { doLoginFailed, doLoginInProgress,doLoginSuccess  } from "../actions";
import { DO_LOGIN_REQUEST } from "../constants";

export function* doLogin(data) {
  try {
    yield put(doLoginInProgress());
    const result = yield call(apiHandler.doLogin, data);
    yield put(doLoginSuccess(result));
    console.log('login sagas', result)
  } catch (error) {
    //const errorObj = getError(error, LOGIN_FAIL);
    let {
      response: { data }
    } = error;
    yield put(doLoginFailed(data));
  }
}

function* actionWatcher() {
  yield takeLatest(DO_LOGIN_REQUEST, doLogin);
}
export default function* userSagas() {
  yield all([actionWatcher()]);
}
