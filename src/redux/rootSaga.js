import { fork, all } from "redux-saga/effects";
import assetsSagas from "../containers/assetManagement/sagas";

export default function* rootSaga() {
  return yield all([fork(assetsSagas)]);
}
