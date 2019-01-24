import actionTypes from "../actionTypes/actionTypes";

const initState = {
    orderListType: [{}],
    orderTypes: [
        {
        typeDesc: 'WorkSchedule',
        typeName: 'Графік роботи',
        className: 'orderTypeActive',
        active: true
        },
        {
        typeDesc: 'WorkPlan',
        typeName: 'План завдань',
        className: 'orderTypeDefault',
        active: false
        },
        {
        typeDesc: 'PerformanceStatistics',
        typeName: 'Cтатистика успішності',
        className: 'orderTypeDefault',
        active: false
        }
    ],
};

export function ProfileReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHOOSE_ORDER_LIST_TYPE:
      return {
        ...state,
        orderListType: action.payload.orderListType,
        orderTypes: state.orderTypes.map((orderType) => orderType.typeDesc === action.payload.orderListType ?
          ({ ...orderType, className: 'orderTypeActive', active: true}) : ({ ...orderType, className: 'orderTypeDefault', active: false}))
      }
    default:
      return state;
  }
}
