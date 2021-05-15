import { ProfileType } from "./types/types";

export const  replaceNull = (object: ProfileType, replaceValue = '') => {
    const replacer = (key: any, value: string | null | undefined) => String(value) === "null" || String(value) === "undefined" ? replaceValue : value;
    return JSON.parse( JSON.stringify(object, replacer));
};

