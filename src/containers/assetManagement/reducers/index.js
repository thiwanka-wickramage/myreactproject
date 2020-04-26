const assetsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ASSETS":
      return { ...state };
    case "GET_ASSETS_SUCCESS":
      return { ...state, getAssets_data: action.result };
    default:
      return state;
  }
};
export default assetsReducer;
