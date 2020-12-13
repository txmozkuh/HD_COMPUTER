import { combineReducers } from 'redux';
import cv from './modules/cv';
import cvInfo from './modules/cvInfo';

export default combineReducers({
  cv,
  cvInfo
});
