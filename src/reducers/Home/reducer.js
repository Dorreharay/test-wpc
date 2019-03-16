import actionTypes from '../../actionTypes/actionTypes';

const initState = {
  loading: false,
  data: [[]],
};

export default function HomeReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS_ASYNC_ACTION:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case actionTypes.START_ASYNC_ACTION:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
