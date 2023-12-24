/**
 * @function 设置默认值
 * @param content
 * @param defaultText
 */
export const defaultText = <T>(content: T, defaultText: T): T => {
  return content === undefined || (content as unknown as string) === ''
    ? defaultText
    : content;
};

/**
 * @function 枚举类型转键值对 { [k: string]: string; }
 * @param target
 * @returns
 */
export const enum2Obj = (target: any) => {
  return Object.fromEntries(Object.entries<string>(target));
};

/**
 * @function 获取枚举类型key值，类似于Object.keys()
 * @param target
 * @returns
 */
export const enumKeys = (target: any) => {
  return Object.entries<string>(target).map((i) => i[0]);
};

/**
 * @function 获取枚举类型value值，类似于Object.values()
 * @param target
 * @returns
 */
export const enumVaules = (target: any) => {
  return Object.entries<string>(target).map((i) => i[1]);
};

export const isClient = typeof window !== 'undefined';

export const rand = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const isEmpty = (val: unknown) =>
  (!val && val !== 0) ||
  (isArray(val) && val.length === 0) ||
  (isObject(val) && !Object.keys(val as Object).length);

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false;
  return e instanceof Element;
};

export const isArray = Array.isArray;
export const isMap = (val: any) => toTypeString(val) === '[object Map]';
export const isSet = (val: any) => toTypeString(val) === '[object Set]';
export const isDate = (val: any) => val instanceof Date;
export const isFunction = (val: any) => typeof val === 'function';
export const isString = (val: any) => typeof val === 'string';
export const isSymbol = (val: any) => typeof val === 'symbol';
export const isObject = (val: any) => val !== null && typeof val === 'object';
export const isPromise = (val: any) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
export const objectToString = Object.prototype.toString;
export const toTypeString = (value: any) => objectToString.call(value);

/**
 * @function 指定保留的小数点位数
 * @param value 源数字
 * @param n 所需要保留的小数点位数
 * @description 例子：
 *  - roundFun(5/3, 2);  // 1.67
 *  - roundFun(4, 2);  // 4
 *  - roundFun(0.015, 2);  //0.02
 * @returns
 */
export const fomatFloat = (value: number, n: number = 0) =>
  Math.round(value * Math.pow(10, n)) / Math.pow(10, n);

export const now = () => Date.now();
