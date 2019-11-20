

import axios from 'axios';

// api/users/:id will have information for a specific user id

export const fetchUser = id => {
    return axios.get(`/api/users/${id}`);
};



