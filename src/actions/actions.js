import actionTypes from "../actionTypes/actionTypes";


export const startAsyncAction = () => ({
  type: actionTypes.START_ASYNC_ACTION
});

export const successAsyncAction = (data) => ({
  type: actionTypes.SUCCESS_ASYNC_ACTION,
  payload: { data }
});