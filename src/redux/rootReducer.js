import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import assetsReducer from "../containers/assetManagement/reducers";
import loginReducer from "../containers/login/reducers";

const rootReducer = combineReducers( { assetsReducer, loginReducer, form: formReducer } );
const appReducer = ( state, action ) => rootReducer( state, action );
export default appReducer;
