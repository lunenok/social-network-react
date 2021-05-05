import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true, 
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '59869aef-c5ae-45e9-94f6-2f4f302f6db0'
  }
});

export const getUsers = async (currentPage, usersToShow) => {
    const response = await instance.get(`users?page=${currentPage}&count=${usersToShow}`,)
    return response.data;
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

export const login = (email, password, rememberMe, captcha) => {
    return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
};

export const logout = () => {
    return instance.delete(`/auth/login`)
};

export const getUserStatus = (userId) => {
    return instance.get(`profile/status/${userId}`);
};

export const updateStatus = (status) => {
    return instance.put('profile/status', {status: status});
};

export const uploadPhoto = (photo) => {
    const formData = new FormData();
    const imagefile = photo;
    formData.append("image", imagefile);
    return instance.put('profile/photo', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    });
};

export const uploadProfileData = (profileData) => {
    return instance.put('profile', profileData);
};

export const getCaptchaUrl = () => {
    return instance.get('security/get-captcha-url');
};