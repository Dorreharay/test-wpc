import { combineReducers } from 'redux';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  Home: homeReducer,
});

export default rootReducer;
