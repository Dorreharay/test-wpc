import { combineReducers } from 'redux';
import { HomeReducer } from './home';

export const rootReducer = combineReducers({
  Home: HomeReducer,
});
