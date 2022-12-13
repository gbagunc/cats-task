import { api } from './config';

export const getCategoriesReq = () => {
  return api.get('categories');
};

export const getImagesReq = (id, limit) => {
  return api.get(`/images/search?limit=${limit}&page=1&category_ids=${id}`);
};
