import { createSelector } from "reselect";
const assetsReducer = (state) => state.assetsReducer;

const getAssetsSelector = () =>
  createSelector(assetsReducer, (currentState) => currentState.getAssets_data);

export { getAssetsSelector };
