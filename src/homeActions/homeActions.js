import actionTypes from '../actionTypes/actionTypes';

export const startAsyncAction = () => ({
  type: actionTypes.START_ASYNC_ACTION,
});

export const successAsyncAction = data => ({
  type: actionTypes.SUCCESS_ASYNC_ACTION,
  payload: { data },
});

export const chooseProject = projectName => ({
  type: actionTypes.CHOOSE_PROJECT,
  payload: { projectName },
});

export const chooseOrdersListType = orderListType => ({
  type: actionTypes.CHOOSE_ORDER_LIST_TYPE,
  payload: { orderListType },
});

export const copyToClipboardAction = () => ({
  type: actionTypes.COPY_TO_CLICKBOARD,
  payload: { copiedToClickboard: true },
});

export const resetClipboard = () => ({
  type: actionTypes.RESET_CLICKBOARD,
  payload: { copiedToClickboard: false },
});

export const toggleEditMode = () => ({
  type: actionTypes.TOGGLE_EDIT_MODE,
});

export const applyEditChanges = formData => ({
  type: actionTypes.APPLY_EDIT_CHANGES,
  payload: { formData },
});
