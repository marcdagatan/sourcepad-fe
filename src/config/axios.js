import axiosMain from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { API_URL } from '../globals';

import { store } from '../store';

const axiosBase = axiosMain.create({ baseURL: API_URL });

const axios = applyCaseMiddleware(axiosBase);

const axiosAuthenticated = () => {
  const instance = axiosBase;

  instance.interceptors.request.use(config => {
    const { authToken } = store.getState().auth;
    config.headers.Authorization = `Bearer ${authToken}`; // eslint-disable-line

    return config;
  });

  return instance;
};

export { axios, axiosAuthenticated };
