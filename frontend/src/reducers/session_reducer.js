import { RECEIVE_CURRENT_USER, 
  RECEIVE_USER_LOGOUT, 
} from '../actions/session_actions';

import {
  SWITCH_DATE
} from '../actions/cart_actions';

const initialState = {
  isAuthenticated: false,
  user: {},
  currentDate: Date().toString().slice(0, 15)
};

export default function(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,   
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
        currentDate: Date().toString().slice(0, 15)
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
        currentDate: undefined
      };

    case SWITCH_DATE:
      return {
        ...state,
        currentDate: action.date
      };
      
    default:
      return state;
  }
}