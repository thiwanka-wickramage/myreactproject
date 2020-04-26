import { put, takeLatest, call, all } from "redux-saga/effects";
import apiHandler from "../../../middlewares/apiHandler";
import { getAssetsSuccessAction } from "../actions";
import { GET_ASSETS } from "../constants";

function* getAssets() {
  const result = yield call(apiHandler.getAssets);
  yield put(getAssetsSuccessAction(result.data));
}
function* actionWatcher() {
  yield takeLatest(GET_ASSETS, getAssets);
}
export default function* assetsSagas() {
  yield all([actionWatcher()]);
}
