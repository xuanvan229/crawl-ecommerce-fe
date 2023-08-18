/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (callback: (...args: any[]) => void, time: number) => {
  let interval: any;
  return (...args: any[]) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      callback(...args);
    }, time);
  };
};
