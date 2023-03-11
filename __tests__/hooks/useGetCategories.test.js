import { renderHook } from '@testing-library/react-hooks';
import { useGetCategories } from '../../src/hooks/useGetCategories';
import { getCategories } from '../../src/redux/actions/resourcesActions';
import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('useGetCategories', () => {
  const dispatch = jest.fn();
  const categories = ['category1', 'category2'];
  const loading = false;

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation(selector =>
      selector({
        resources: { categories, loading },
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return categories and loading from state', () => {
    const { result } = renderHook(() => useGetCategories());
    expect(result.current.categories).toEqual(categories);
    expect(result.current.loading).toEqual(loading);
  });
});
