import { put, takeLatest, all } from "redux-saga/effects";

function* getAssets() {
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/users`
  ).then((response) => response.json());
  yield put({ type: "GET_ASSETS_SUCCESS", json: json });
}
function* actionWatcher() {
  yield takeLatest("GET_ASSETS", getAssets);
}
export default function* assetsSagas() {
  yield all([actionWatcher()]);
}
