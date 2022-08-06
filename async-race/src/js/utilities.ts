/* eslint-disable @typescript-eslint/restrict-template-expressions */
export const getUrl = <T>(dir: string, queryParams: T): string => {
  const urlBase = 'http://127.0.0.1:3000';
  const queryString = Object.entries(queryParams).reduce((str, pair) => {
    return `${str}${pair[0]}=${pair[1]}&`;
  }, '');
  const url = `${urlBase}${dir}?${queryString}`;
  return url;
};
