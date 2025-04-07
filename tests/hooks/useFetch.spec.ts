import { describe, expect, test } from 'vitest';
import { renderHook } from 'vitest-browser-react';
import useFetch from '@/hooks/useFetch';

describe('useFetch Hook', () => {
  test('return required info and function', async () => {
    const { result } = renderHook(() => useFetch({ url: '' }));

    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.fetchData).toBeInstanceOf(Function);
  });
});
