import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../redux/actions/resourcesActions';

export const useGetCategory = id => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory(id));
  }, [category, dispatch, id, loading]);

  const category = useSelector(state => state.resources.category);
  const loading = useSelector(state => state.resources.loading);

  return {
    category,
    loading,
  };
};
