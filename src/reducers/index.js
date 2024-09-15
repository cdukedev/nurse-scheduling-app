// src/reducers/index.js
import { combineReducers } from 'redux';
import nurseReducer from './nurseReducer';
import shiftReducer from './shiftReducer';

const rootReducer = combineReducers({
  nurses: nurseReducer,
  shifts: shiftReducer,
});

export default rootReducer;
