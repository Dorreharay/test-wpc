import { all, call, put, takeLatest } from 'redux-saga/effects';
import { successAsyncAction } from '../actions/homeActions';
import actionTypes from '../actionTypes/actionTypes';

function* fetchData(action) {
  const url = `https://jsonplaceholder.typicode.com/todos`;
  const pageSize = 30;
  try {
    const [ data ] = yield all([
      call(fetch, url)
    ]);

    const todos = yield data.json();

    const results = [];

    while (todos.length) {
      results.push(todos.splice(0, pageSize));
    }
    yield put(successAsyncAction(results));
  } catch (e) {
    console.error(e.message);
  }
}

function* sagaWatcher() {
  yield [
    takeLatest(actionTypes.START_ASYNC_ACTION, fetchData),
  ];
}

export default sagaWatcher;
