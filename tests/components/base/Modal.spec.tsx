import { describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import Modal from '@/components/base/Modal';

describe('Modal Component', () => {
  const modalTitle = 'This is modal title!';
  const modalContent = 'This is modal content!';
  const modalFooter = 'This is modal footer!';
  const modalRef = { current: null };
  const mockFn = vi.fn();

  test('render title, content, and footer', async () => {
    const { getByText } = render(
      <Modal
        title={modalTitle}
        content={modalContent}
        footer={modalFooter}
        closeModal={mockFn}
        modalRef={modalRef}
      />,
    );

    await expect.element(getByText(modalTitle)).toBeInTheDocument();
    await expect.element(getByText(modalContent)).toBeInTheDocument();
    await expect.element(getByText(modalFooter)).toBeInTheDocument();
  });
});
