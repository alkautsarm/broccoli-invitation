import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import Home from '@/pages/Home';

describe('Home Page', () => {
  test('render copywriting', async () => {
    const { getByRole, getByText } = render(<Home />);

    await expect
      .element(getByText('A better way to enjoy every day.'))
      .toBeInTheDocument();
    await expect
      .element(getByText('Be the first to know when we launch.'))
      .toBeInTheDocument();
    await expect
      .element(getByRole('button', { name: 'Request an invite' }))
      .toBeInTheDocument();
  });
});
