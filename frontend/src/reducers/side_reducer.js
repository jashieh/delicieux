


import { OPEN_SIDE, CLOSE_SIDE } from "../actions/side_actions";

const sideReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case OPEN_SIDE:
      return action.side;
    case CLOSE_SIDE:
      return null;
    default:
      return state;
  }
};

export default sideReducer;
