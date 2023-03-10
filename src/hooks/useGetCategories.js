import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/actions/resourcesActions';

export const useGetCategories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, loading]);

  const categories = useSelector(state => state.resources.categories);
  const loading = useSelector(state => state.resources.loading);

  return {
    categories,
    loading,
  };
};
