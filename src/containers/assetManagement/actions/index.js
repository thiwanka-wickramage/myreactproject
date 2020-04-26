import {
  GET_ASSETS,
  GET_ASSETS_IN_PROGRESS,
  GET_ASSETS_SUCCESS,
  GET_ASSETS_FAILED,
} from "../constants";

const getAssetsAction = (payload) => ({
  type: GET_ASSETS,
  payload,
});

const getAssetsInProgressAction = () => ({
  type: GET_ASSETS_IN_PROGRESS,
});

const getAssetsSuccessAction = (result) => ({
  type: GET_ASSETS_SUCCESS,
  result,
});

const getAssetsFailedAction = (error) => ({
  type: GET_ASSETS_FAILED,
  error,
});

export {
  getAssetsAction,
  getAssetsInProgressAction,
  getAssetsSuccessAction,
  getAssetsFailedAction,
};
