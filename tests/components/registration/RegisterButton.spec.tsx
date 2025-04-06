import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import RegisterButton from '@/components/registration/RegisterButton';

describe('RegisterButton Component', () => {
  const registerBtnText = 'Request an invite';

  test('render copywriting', async () => {
    const { getByRole } = render(<RegisterButton />);

    await expect
      .element(getByRole('button', { name: registerBtnText }))
      .toBeInTheDocument();
  });
});
