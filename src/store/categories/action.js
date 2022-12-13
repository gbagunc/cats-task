import { createCombinedAction } from '../helpers';

export const getCategories = createCombinedAction({
  name: 'getCategories',
  prefix: 'getCategories@@',
});
