import { combineReducers } from 'redux';
import cv from './modules/cv';
import cvInfo from './modules/cvInfo';
import user from './modules/user';

export default combineReducers({
  cv,
  cvInfo,
  user
});
