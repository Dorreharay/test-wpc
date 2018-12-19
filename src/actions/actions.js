import actionTypes from '../actionTypes/actionTypes';

export const getSlideName = (name) => ({
  type: actionTypes.GET_NEWSLINE_ITEM_NAME, 
  payload: { name }
})  