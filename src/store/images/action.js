import { createCombinedAction } from '../helpers';

export const getImages = createCombinedAction({
  name: 'getImages',
  prefix: 'getImages@@',
});
