import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_CATEGORY_BY_ID,
  GET_CATEGORY_BY_ID_SUCCESS,
  GET_CATEGORY_BY_ID_FAILURE,
} from '../types';

const initialState = {
  categories: [],
  category: null,
  loading: false,
  error: null,
};

export const resourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_CATEGORY_BY_ID:
      return {
        ...state,
        loading: true,
      };

    case GET_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };

    case GET_CATEGORY_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
