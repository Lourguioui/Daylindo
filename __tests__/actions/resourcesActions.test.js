import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  getCategoriesList,
  getCategoriesListSuccess,
  getCategoriesListFailure,
  getCategoryById,
  getCategoryByIdSuccess,
  getCategoryByIdFailure,
  getCategories,
  getCategory,
} from '../../src/redux/actions/resourcesActions';

import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_CATEGORY_BY_ID,
  GET_CATEGORY_BY_ID_SUCCESS,
  GET_CATEGORY_BY_ID_FAILURE,
} from '../../src/redux/types';
import data from '../../src/data/resources.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux actions', () => {
  it('should create an action to get categories list', () => {
    const expectedAction = {
      type: GET_ALL_CATEGORIES,
    };
    expect(getCategoriesList()).toEqual(expectedAction);
  });

  it('should create an action to get categories list success', () => {
    const categories = [
      { id: 1, name: 'category 1' },
      { id: 2, name: 'category 2' },
    ];
    const expectedAction = {
      type: GET_ALL_CATEGORIES_SUCCESS,
      payload: categories,
    };
    expect(getCategoriesListSuccess(categories)).toEqual(expectedAction);
  });

  it('should create an action to get categories list failure', () => {
    const error = 'Error message';
    const expectedAction = {
      type: GET_ALL_CATEGORIES_FAILURE,
      payload: error,
    };
    expect(getCategoriesListFailure(error)).toEqual(expectedAction);
  });

  it('should create an action to get category by id', () => {
    const id = 1;
    const expectedAction = {
      type: GET_CATEGORY_BY_ID,
      payload: id,
    };
    expect(getCategoryById(id)).toEqual(expectedAction);
  });

  it('should create an action to get category by id success', () => {
    const category = { id: 1, name: 'category 1' };
    const expectedAction = {
      type: GET_CATEGORY_BY_ID_SUCCESS,
      payload: category,
    };
    expect(getCategoryByIdSuccess(category)).toEqual(expectedAction);
  });

  it('should create an action to get category by id failure', () => {
    const error = 'Error message';
    const expectedAction = {
      type: GET_CATEGORY_BY_ID_FAILURE,
      payload: error,
    };
    expect(getCategoryByIdFailure(error)).toEqual(expectedAction);
  });

  // it('should dispatch getCategoriesListSuccess with categories data', () => {
  //   const store = mockStore({});
  //   const expectedActions = [
  //     { type: GET_ALL_CATEGORIES },
  //     { type: GET_ALL_CATEGORIES_SUCCESS, payload: [...data] },
  //   ];
  //   store.dispatch(getCategories());
  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  it('should dispatch getCategoryByIdSuccess with category data', () => {
    const store = mockStore({});
    const id = 1;
    const expectedActions = [
      { type: 'GET_CATEGORY_BY_ID', payload: id },
      { type: 'GET_CATEGORY_BY_ID_SUCCESS', payload: data[0] },
    ];
    store.dispatch(getCategory(id));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
