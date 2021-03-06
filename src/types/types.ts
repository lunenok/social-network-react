export type ContactsType = {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
};

export type PhotosType = {
    small: string | null;
    large: string | null;
};

export type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string| null;
    fullName: string;
    aboutMe: string | null;
    contacts: ContactsType;
    photos: PhotosType;
};

export type PostType = {
    id: number;
    text: string;
    likes: number;
}

export type UserType = {
    id: number;
    name: string;
    status: string;
    followed: boolean;
    photos: PhotosType;
};

export type DialogNameType = {
    id: number;
    name: string;
};

export type MessageType = {
    id: number;
    message: string;
};

export type AuthInfoType = {
    id: number;
    email: string;
    login: string;
};