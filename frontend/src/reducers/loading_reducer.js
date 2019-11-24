import { START_LOAD, STOP_LOAD } from "../actions/loading_actions";

const loadingReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOAD:
      return action.load;
    case STOP_LOAD:
      return null;
    default:
      return state;
  }
};

export default loadingReducer;