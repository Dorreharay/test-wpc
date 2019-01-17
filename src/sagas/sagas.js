import { all, call, put, takeLatest } from 'redux-saga/effects'
import { successAsyncAction } from '../homeActions/homeActions';
import actionTypes from "../actionTypes/actionTypes";

function* fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/users/';

  try {
    const data = yield call(fetch, url);
    const todos = yield data.json();

    yield put(successAsyncAction(todos));
  } catch (e) {
    console.error(e.message)
  }
}

function* sagaWatcher() {
  yield takeLatest(actionTypes.START_ASYNC_ACTION, fetchData);
}



export default sagaWatcher;