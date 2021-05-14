import axios from 'axios';
import { AuthInfoType, PhotosType, ProfileType, UserType } from '../types/types';

const instance = axios.create({
  withCredentials: true, 
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '59869aef-c5ae-45e9-94f6-2f4f302f6db0'
  }
});

export const getUsers = async (currentPage: number, usersToShow: number) => {
    const response = await instance.get<GetUsersType>(`users?page=${currentPage}&count=${usersToShow}`,)
    return response.data;
};

export const followUser = (userId: number) => {
    return instance.post<APIresponseType>(`follow/${userId}`).then(response => response.data);
};

export const unfollowUser = (userId: number) => {
    return instance.delete<APIresponseType>(`follow/${userId}`).then(response => response.data);
};

export const getProfile = (userId: number | null) => { // Костыль с null
    return instance.get<ProfileType>(`profile/${userId}`);
};

export const getAuthInfo = () => {
    return instance.get<APIresponseType<AuthInfoType>>(`auth/me`);
};

export const login = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => {
    return instance.post<APIresponseType>(`/auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
};

export const logout = () => {
    return instance.delete<APIresponseType>(`/auth/login`).then(response => response.data);
};

export const getProfileStatus = (userId: number) => {
    return instance.get<string>(`profile/status/${userId}`);
};

export const updateStatus = (status: string) => {
    return instance.put<APIresponseType>('profile/status', {status: status});
};

export const uploadPhoto = (photo: File) => {
    const formData = new FormData();
    const imagefile = photo;
    formData.append("image", imagefile);
    return instance.put<APIresponseType<UpdatePhotoDataType>>('profile/photo', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    });
};

export const uploadProfileData = (profileData: ProfileType) => {
    return instance.put<APIresponseType>('profile', profileData);
};

export const getCaptchaUrl = () => {
    return instance.get<GetCaptchaResponseUrl>('security/get-captcha-url');
};

type GetCaptchaResponseUrl = {
    url: string;
};

type UpdatePhotoDataType = {
    photos: PhotosType;
}

type APIresponseType<D ={}> = {
    data: D;
    resultCode: number;
    messages: Array<string>;
};

type GetUsersType = {
    items: Array<UserType>;
    totalCount: number;
    error: string;
};