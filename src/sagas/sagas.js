import { all, call, put, takeLatest } from 'redux-saga/effects'
import { successAsyncAction, startUpdateOrder, successUpdateOrder } from '../homeActions/homeActions';
import actionTypes from "../actionTypes/actionTypes";

function* fetchData() {
  const url = 'http://localhost:8000/orders';
  const pageSize = 30;
  try {
    const data = yield call(fetch, url);
    const todos = yield data.json();
    let results = [];

    while (todos.length) {
      results.push(todos.splice(0, pageSize));
    }

    yield put(successAsyncAction(results));
  } catch (e) {
    console.error(e.message)
  }
}

function* asyncUpdateOrder(action) {
  const url = `http://localhost:8000/orders/${action.payload.formData.id}`;

  try {
    yield put({ type: actionTypes.START_UPDATE_ORDER })
    yield call(fetch, url, {
      method: 'PUT',
      body: JSON.stringify(action.payload.formData),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      },
    });
    yield put({ type: actionTypes.SUCCESS_UPDATE_ORDER })
  } catch {

  }
}


function* sagaWatcher() {
  yield [
    takeLatest(actionTypes.START_ASYNC_ACTION, fetchData),
    takeLatest(actionTypes.APPLY_EDIT_CHANGES, asyncUpdateOrder)
  ];
}



export default sagaWatcher;