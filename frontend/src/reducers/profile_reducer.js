import { RECEIVE_USER } from '../actions/profile_actions';

const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  
  let nextState;
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, action.user);
    default:
      return state
  }
};

export default ProfileReducer;