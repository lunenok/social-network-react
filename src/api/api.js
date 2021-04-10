import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true, 
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '59869aef-c5ae-45e9-94f6-2f4f302f6db0'
  }
})

export const getUsers = (currentPage, usersToShow) => {
  return instance.get(`users?page=${currentPage}&count=${usersToShow}`,)
    .then(response => {
      return response.data;
    }
  )
};

export const followUser = (userId) => {
  return instance.post(`follow/${userId}`);
};

export const unfollowUser = (userId) => {
  return instance.delete(`follow/${userId}`);
};

export const setProfile = (userId) => {
    return instance.get(`profile/${userId}`);
};

export const getAuthInfo = () => {
    return instance.get(`auth/me`);
};

export const getUserStatus = (userId) => {
    return instance.get(`profile/status/${userId}`);
};

export const updateStatus = (status) => {
    return instance.put('profile/status', {status: status});
};