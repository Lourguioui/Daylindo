import { renderHook } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCategory } from '../../src/hooks/useGetCategory';
import { getCategory } from '../../src/redux/actions/resourcesActions';

jest.mock('react-redux');

describe('useGetCategory', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('should return the category and loading state from the store', () => {
    const mockCategory = { name: 'Test Category' };
    const mockLoading = false;
    useSelector.mockImplementation(selector =>
      selector({
        resources: {
          category: mockCategory,
          loading: mockLoading,
        },
      }),
    );
    const id = 1;
    const { result } = renderHook(() => useGetCategory(id));
    expect(result.current.category).toEqual(mockCategory);
    expect(result.current.loading).toEqual(mockLoading);
  });
});
