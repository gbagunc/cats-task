import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './store/categories/action';
import { selectCategories } from './store/categories/selector';
import { getImages } from './store/images/action';
import { selectImages } from './store/images/selector';

const useApp = () => {
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(10);
  const [categoryId, setCategoryId] = useState(null);

  const categories = useSelector(selectCategories);
  const images = useSelector(selectImages);

  const showMore = (e) => {
    e.preventDefault();
    setLimit((prev) => prev + 10);
    dispatch(getImages({ id: categoryId ?? 1, limit: limit }));
  };

  const getImagesByCategory = (id) => {
    setCategoryId(id);
    dispatch(getImages({ id, limit }));
  };

  useEffect(() => {
    if (!!images) {
      dispatch(getImages({ id: 1, limit: limit }));
    }
    if (!!categories) dispatch(getCategories());
  }, []);

  return { categories, images, getImagesByCategory, showMore };
};

export default useApp;
