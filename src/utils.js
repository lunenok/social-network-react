export const  replaceNull = (object, replaceValue = '') => {
    const replacer = (key, value) => String(value) === "null" || String(value) === "undefined" ? replaceValue : value;
    return JSON.parse( JSON.stringify(object, replacer));
}