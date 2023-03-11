import { resourcesReducer } from '../../src/redux/reducers/resourcesReducer';
import {
  getCategoriesList,
  getCategoriesListSuccess,
  getCategoriesListFailure,
  getCategoryById,
  getCategoryByIdSuccess,
  getCategoryByIdFailure,
} from '../../src/redux/actions/resourcesActions';

describe('resourcesReducer', () => {
  const initialState = {
    categories: [],
    category: null,
    loading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(resourcesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_ALL_CATEGORIES', () => {
    const action = getCategoriesList();
    const expectedState = {
      ...initialState,
      loading: true,
    };
    expect(resourcesReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ALL_CATEGORIES_SUCCESS', () => {
    const categories = [
      { id: 1, name: 'category1' },
      { id: 2, name: 'category2' },
    ];
    const action = getCategoriesListSuccess(categories);
    const expectedState = {
      ...initialState,
      loading: false,
      categories: categories,
    };
    expect(resourcesReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ALL_CATEGORIES_FAILURE', () => {
    const error = 'error message';
    const action = getCategoriesListFailure(error);
    const expectedState = {
      ...initialState,
      loading: false,
      error: error,
    };
    expect(resourcesReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_CATEGORY_BY_ID', () => {
    const id = 1;
    const action = getCategoryById(id);
    const expectedState = {
      ...initialState,
      loading: true,
    };
    expect(resourcesReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_CATEGORY_BY_ID_SUCCESS', () => {
    const category = { id: 1, name: 'category1' };
    const action = getCategoryByIdSuccess(category);
    const expectedState = {
      ...initialState,
      loading: false,
      category: category,
    };
    expect(resourcesReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_CATEGORY_BY_ID_FAILURE', () => {
    const error = 'error message';
    const action = getCategoryByIdFailure(error);
    const expectedState = {
      ...initialState,
      loading: false,
      error: error,
    };
    expect(resourcesReducer(initialState, action)).toEqual(expectedState);
  });
});
