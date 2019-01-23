import actionTypes from "../actionTypes/actionTypes";

export const chooseOrdersListType = (orderListType) => ({
    type: actionTypes.CHOOSE_ORDER_LIST_TYPE,
    payload: { orderListType }
  })