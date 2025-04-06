import { describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import RegisterModal from '@/components/registration/RegisterModal';
import { RefObject } from 'react';

describe('RegisterModal Component', () => {
  const mockClose = vi.fn();
  const modalTitle = 'Request an invite';
  const modalRef: unknown = {
    current: { close: mockClose },
  };

  test('render title', async () => {
    const { getByText } = render(
      <RegisterModal modalRef={modalRef as RefObject<HTMLDialogElement>} />,
    );

    await expect.element(getByText(modalTitle)).toBeInTheDocument();
  });

  test('render send button', async () => {
    const { getByText } = render(
      <RegisterModal modalRef={modalRef as RefObject<HTMLDialogElement>} />,
    );

    await expect.element(getByText('Send')).toBeInTheDocument();
  });

  test('render form', async () => {
    const { getByPlaceholder } = render(
      <RegisterModal modalRef={modalRef as RefObject<HTMLDialogElement>} />,
    );

    await expect.element(getByPlaceholder('Full name')).toBeInTheDocument();
    await expect
      .element(getByPlaceholder('Email', { exact: true }))
      .toBeInTheDocument();
    await expect.element(getByPlaceholder('Confirm email')).toBeInTheDocument();
  });
});
