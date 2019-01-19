import { all, call, put, takeLatest } from 'redux-saga/effects'
import { successAsyncAction } from '../homeActions/homeActions';
import actionTypes from "../actionTypes/actionTypes";
import data from '../reducers/randomData.json';

function* fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/users/';
  const pageSize = 30;
  try {
    // const data = yield call(fetch, url);
    // const todos = yield data.json();
    let results = [];

    while (data.length) {
      results.push(data.splice(0, pageSize));
    }

    yield put(successAsyncAction(results));
  } catch (e) {
    console.error(e.message)
  }
}

function* sagaWatcher() {
  yield takeLatest(actionTypes.START_ASYNC_ACTION, fetchData);
}



export default sagaWatcher;