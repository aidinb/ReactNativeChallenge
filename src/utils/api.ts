import {baseAPI} from './baseUrl.ts';

export const getItems = (): Promise<any> =>
  baseAPI.get('/users').then(res => res.data);
