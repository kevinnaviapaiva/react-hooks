import { DELETE, GET, POST, PUT } from './constants';

export const jsonOptions = (isFormData: boolean, token?: string) => {
  let headers = new Headers();
  if (!isFormData) {
    headers.append('Content-Type', 'application/json');
  }
  if (token) {
    headers.append('Authorization', 'Bearer ' + token);
  }
  return headers;
};

// export const getToken = () => {
//   return sessionStorage.getItem(TOKEN) ? ('' + sessionStorage.getItem(TOKEN)) : (localStorage.getItem(TOKEN) ? ('' + localStorage.getItem(TOKEN)) : '');
// }

const method = (url: string, method: string, body: any, isFormData: boolean, token?: string) => {
  const options: { method: string, headers: Headers, body?: string } = {
    method,
    headers: jsonOptions(isFormData, token)
  };
  if (!isFormData) {
    if (Object.keys(body).length) {
      options.body = JSON.stringify(body);
    }
  } else {
    options.body = body;
  }
  return fetch(url, options)
    .then(response => response.json())
    .catch(error => ({ status: 500, message: error }));
};

export const getRequest = (url: string, token?: string) => method(url, GET, {}, false, token);

export const postRequest = (url: string, body: any, token?: string) => method(url, POST, body, false, token);

export const putRequest = (url: string, body: any, token?: string) => method(url, PUT, body, false, token);

export const deleteRequest = (url: string, token?: string) => method(url, DELETE, {}, false, token);

export const postFormData = (url: string, body: any, token?: string) => method(url, POST, body, true, token);

// export const logout = () => {
//   localStorage.removeItem(TOKEN);
//   sessionStorage.removeItem(TOKEN);
// }