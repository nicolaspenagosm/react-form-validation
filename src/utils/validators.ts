export const isNotEmpty = (str: string) => /.+/.test(str);
export const maxLength = (length: number, str: string) => str.length <= length;
export const minLength = (length: number, str: string) => str.length >= length;
export const isANumber = (str: string) => /^\d+$/.test(str);
