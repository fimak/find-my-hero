import axios from 'axios';
import { Md5 } from 'ts-md5';
import { Preference } from './types';

const baseURL = 'http://gateway.marvel.com/v1/public';
const apikey = 'e7a6753c946deb317b70eae95f3fa231';
const privateKey = '3b1e7360dceaa9704b387a19bcf11c3cbea37427';

export const getHeroes = (preference: Preference) => {
  const ts = Date.now();
  const hash = Md5.hashStr(ts + privateKey + apikey);

  return axios.get(`/characters`, {
    baseURL,
    params: { ts, apikey, hash, }
  });
}

export default getHeroes;