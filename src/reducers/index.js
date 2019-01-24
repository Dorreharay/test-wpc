import { combineReducers } from 'redux';
import { HomeReducer } from './home';
import { ProfileReducer } from './ProfileReducer';

export const rootReducer = combineReducers({
  Home: HomeReducer,
  Profile: ProfileReducer,
});
