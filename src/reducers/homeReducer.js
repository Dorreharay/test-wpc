import actionTypes from '../actionTypes/actionTypes';

const initState = {
  loading: false,
};

export default function HomeReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS_ASYNC_ACTION:
      return {
        ...state,
        ordersList: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
}
