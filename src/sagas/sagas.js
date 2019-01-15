import { call, put, takeLatest } from 'redux-saga/effects'
import { successAsyncAction } from '../actions/actions';
import actionTypes from "../actionTypes/actionTypes";

function* fetchData(action) {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  try {
    const data = yield call(fetch, url);
    const todos = yield data.json();
    const slicedTodos = yield todos.slice(0, 10);

    yield put(successAsyncAction(slicedTodos));
  } catch (e) {
    console.log(e.message)
  }
}

function* sagaWatcher() {
  yield takeLatest(actionTypes.START_ASYNC_ACTION, fetchData);
}



export default sagaWatcher;