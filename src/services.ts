import axios from 'axios';
import { Md5 } from 'ts-md5';

const baseURL = 'http://gateway.marvel.com/v1/public';
const apikey = 'e7a6753c946deb317b70eae95f3fa231';
const privateKey = '3b1e7360dceaa9704b387a19bcf11c3cbea37427';

export const getHeroes = (page = 0, limit = 20) => {
  const ts = Date.now();
  const hash = Md5.hashStr(ts + privateKey + apikey);

  return axios.get(`/characters`, {
    baseURL,
    params: { ts, apikey, hash, limit, offset: (page - 1)  * limit }
  });
}

export default getHeroes;