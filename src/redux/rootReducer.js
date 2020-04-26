import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import assetsReducer from "../containers/assetManagement/reducers";

const rootReducer = combineReducers({ assetsReducer, form: formReducer });
const appReducer = (state, action) => rootReducer(state, action);
export default appReducer;
