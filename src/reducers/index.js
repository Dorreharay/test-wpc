import { combineReducers } from 'redux';
import { newsLine } from './newsLine';

export const rootReducer = combineReducers({
  newsLine: newsLine
})
    