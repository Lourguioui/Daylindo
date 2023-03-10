import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_CATEGORY_BY_ID,
  GET_CATEGORY_BY_ID_SUCCESS,
  GET_CATEGORY_BY_ID_FAILURE,
} from '../types';
import data from '../../data/resources.json';

export const getCategoriesList = () => ({
  type: GET_ALL_CATEGORIES,
});

export const getCategoriesListSuccess = categories => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoriesListFailure = error => ({
  type: GET_ALL_CATEGORIES_FAILURE,
  payload: error,
});

export const getCategories = () => {
  return dispatch => {
    try {
      dispatch(getCategoriesList);
      dispatch(getCategoriesListSuccess(data));
    } catch (error) {
      dispatch(getCategoriesListFailure(error));
    }
  };
};

export const getCategoryById = id => ({
  type: GET_CATEGORY_BY_ID,
  payload: id,
});

export const getCategoryByIdSuccess = category => ({
  type: GET_CATEGORY_BY_ID_SUCCESS,
  payload: category,
});

export const getCategoryByIdFailure = error => ({
  type: GET_CATEGORY_BY_ID_FAILURE,
  payload: error,
});

export const getCategory = id => {
  return dispatch => {
    try {
      dispatch(getCategoryById(id));
      const category = data.find(item => item.id === id);
      dispatch(getCategoryByIdSuccess(category));
    } catch (error) {
      dispatch(getCategoryByIdFailure(error));
    }
  };
};
