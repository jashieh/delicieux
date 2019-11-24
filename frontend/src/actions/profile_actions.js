import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});


export const updateUser = (user) => dispatch => (
  APIUtil.updateUser(user)
    .then(({ data }) => dispatch(receiveUser(data)))
); 

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
    .then(({ data }) => dispatch(receiveUser(data)))
);

