import axios from 'axios';
import { ProfileType } from '../types/types';

const instance = axios.create({
  withCredentials: true, 
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '59869aef-c5ae-45e9-94f6-2f4f302f6db0'
  }
});

// Переписать на ts
export const getUsers = async (currentPage: number, usersToShow: number) => {
    const response = await instance.get(`users?page=${currentPage}&count=${usersToShow}`,)
    return response.data;
};

type FollowUnfollowUserResponseType = {
    resultCode: number,
    messages: Array<string>,
    data: any
};
export const followUser = (userId: number) => {
    return instance.post<FollowUnfollowUserResponseType>(`follow/${userId}`).then(response => response.data);
};

export const unfollowUser = (userId: number) => {
    return instance.delete<FollowUnfollowUserResponseType>(`follow/${userId}`).then(response => response.data);
};

export const setProfile = (userId: number | null) => { // Костыль с null
    return instance.get(`profile/${userId}`);
};

export const getAuthInfo = () => {
    return instance.get(`auth/me`);
};

export const login = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => {
    return instance.post(`/auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
};

export const logout = () => {
    return instance.delete(`/auth/login`).then(response => response.data);
};

export const getUserStatus = (userId: number) => {
    return instance.get(`profile/status/${userId}`);
};

export const updateStatus = (status: string) => {
    return instance.put('profile/status', {status: status});
};

export const uploadPhoto = (photo: any) => {
    const formData = new FormData();
    const imagefile = photo;
    formData.append("image", imagefile);
    return instance.put('profile/photo', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    });
};

type UploadProfileResponseType = {
    resultCode: number,
    messages: Array<string>,
    data: any
}
export const uploadProfileData = (profileData: ProfileType) => {
    return instance.put<UploadProfileResponseType>('profile', profileData);
};

export const getCaptchaUrl = () => {
    return instance.get('security/get-captcha-url');
};