import { describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import Button from '@/components/base/Button';

describe('Button Component', () => {
  test('render children', async () => {
    const mockFn = vi.fn();
    const { getByText } = render(
      <Button onClick={mockFn}>This is button!</Button>,
    );

    await expect.element(getByText('This is button!')).toBeInTheDocument();
  });

  test('call click function', async () => {
    const mockFn = vi.fn();
    const { getByText } = render(
      <Button onClick={mockFn}>This is button!</Button>,
    );

    await getByText('This is button!').click();
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
