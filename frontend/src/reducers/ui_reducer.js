import { combineReducers } from 'redux';
import modal from './modal_reducer';
import side from './side_reducer';
import loading from './loading_reducer';

export default combineReducers({
  modal,
  side,
  loading,
})