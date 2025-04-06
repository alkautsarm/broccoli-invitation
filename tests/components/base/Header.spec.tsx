import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import Header from '@/components/base/Header';

describe('Header Component', () => {
  test('render copywriting', async () => {
    const { getByText } = render(<Header />);

    await expect.element(getByText('Broccoli & Co.')).toBeInTheDocument();
  });
});
