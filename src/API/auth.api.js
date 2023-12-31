import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};

export const signUp = async body => {
  const { data } = await instance.post(`users/signup`, body);
  setToken(data.token);
  return data;
};

export const signIn = async body => {
  const { data } = await instance.post(`users/login`, body);
  setToken(data.token);
  return data;
};

export const refresh = async () => {
  const { data } = await instance.get(`users/current`);
  return data;
};

export const logOut = async () => {
  await instance.post(`users/logout`);
  deleteToken();
};
