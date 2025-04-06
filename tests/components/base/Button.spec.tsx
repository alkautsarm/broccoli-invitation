import { describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import Button from '@/components/base/Button';

describe('Button Component', () => {
  const buttonText = 'This is button!';
  const mockFn = vi.fn();

  test('render children', async () => {
    const { getByText } = render(
      <Button onClick={mockFn}>{buttonText}</Button>,
    );

    await expect.element(getByText(buttonText)).toBeInTheDocument();
  });

  test('call click function', async () => {
    const { getByText } = render(
      <Button onClick={mockFn}>{buttonText}</Button>,
    );

    await getByText(buttonText).click();
    expect(mockFn.mock.calls.length).toBe(1);
  });

  test('button disabled when loading', async () => {
    const { getByRole } = render(
      <Button loading onClick={mockFn}>
        {buttonText}
      </Button>,
    );

    await expect
      .element(getByRole('button', { disabled: true }))
      .toBeInTheDocument();
  });
});
