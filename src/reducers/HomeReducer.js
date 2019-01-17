import actionTypes from "../actionTypes/actionTypes";

const initState = {
  data: [],
  copiedToClickboard: false,
  editMode: false,
  projectName: 'Складська система EasyBuy', // Виберіть проект
  projectsList: [
    {
      name: 'Магазин одягу',
      className: 'projectName'
    },
    {
      name: 'Система доставки Apex.com',
      className: 'projectName'
    },
    {
      name: 'Продуктовий магазин',
      className: 'projectName'
    },
    {
      name: 'Складська система EasyBuy',
      className: 'projectName'
    },
    {
      name: 'CRM Servis.vn.ua',
      className: 'projectName'
    },
    {
      name: 'TopGoods',
      className: 'projectName'
    }
  ],
  ordersList: [],
  orderTypes: [
    {
      typeDesc: 'isWaiting',
      typeName: 'Очікують',
      className: 'orderTypeActive',
    },
    {
      typeDesc: 'isProcessing',
      typeName: 'В обробці',
      className: 'orderTypeDefault'
    },
    {
      typeDesc: 'isSent',
      typeName: 'Відправлені',
      className: 'orderTypeDefault'
    },
    {
      typeDesc: 'isReceived',
      typeName: 'Отримані',
      className: 'orderTypeDefault'
    },
    {
      typeDesc: 'isArchived',
      typeName: 'Архів',
      className: 'orderTypeDefault'
    }
  ],
};

export function HomeReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS_ASYNC_ACTION:
      return {
        ...state,
        ordersList: action.payload.data,
        loading: false
      };

    case actionTypes.START_ASYNC_ACTION:
      return {
        ...state,
        loading: true
      }

    case actionTypes.CHOOSE_PROJECT:
      return {
        ...state,
        projectName: action.payload.projectName,
        projectsList: state.projectsList.map((project, index) => project.name === action.payload.projectName ?
          ({ ...project, className: 'projectNameHovered' }) : ({ ...project, className: 'projectName' }))
      }
    case actionTypes.CHOOSE_ORDER_LIST_TYPE:
      return {
        ...state,
        orderListType: action.payload.orderListType,
        orderTypes: state.orderTypes.map((orderType) => orderType.typeDesc === action.payload.orderListType ?
          ({ ...orderType, className: 'orderTypeActive' }) : ({ ...orderType, className: 'orderTypeDefault' }))
      }
    case actionTypes.COPY_TO_CLICKBOARD:
      return {
        ...state,
        copiedToClickboard: action.payload.copiedToClickboard
      }
    case actionTypes.RESET_CLICKBOARD:
      return {
        ...state,
        copiedToClickboard: action.payload.copiedToClickboard
      }
    case actionTypes.TOGGLE_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      }
    default:
      return state;
  }
}
