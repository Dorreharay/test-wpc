import actionTypes from '../actionTypes/actionTypes';


const chooseOrdersListType = orderListType => ({
  type: actionTypes.CHOOSE_ORDER_LIST_TYPE,
  payload: { orderListType },
});

export default chooseOrdersListType;
