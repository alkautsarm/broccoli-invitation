import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import Footer from '@/components/base/Footer';

describe('Footer Component', () => {
  test('render copywriting', async () => {
    const { getByText } = render(<Footer />);

    await expect
      .element(getByText('Made with ♥︎ in Melbourne.'))
      .toBeInTheDocument();
    await expect
      .element(getByText('©️ Broccoli & Co. All rights reserved.'))
      .toBeInTheDocument();
  });
});
