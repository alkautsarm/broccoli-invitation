import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import TextInput from '@/components/base/TextInput';

describe('TextInput Component', () => {
  const inputPlaceholder = 'This is modal title!';
  const errorMessage = 'This is error message!';

  test('render input placeholder', async () => {
    const { getByPlaceholder } = render(
      <TextInput placeholder={inputPlaceholder} />,
    );

    await expect
      .element(getByPlaceholder(inputPlaceholder))
      .toBeInTheDocument();
  });

  test('render error message', async () => {
    const { getByText } = render(
      <TextInput errorMessage={errorMessage} placeholder={inputPlaceholder} />,
    );

    await expect.element(getByText(errorMessage)).toBeInTheDocument();
  });
});
