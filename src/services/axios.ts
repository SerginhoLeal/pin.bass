import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.PIN_BASS_URL_LOCAL
});
