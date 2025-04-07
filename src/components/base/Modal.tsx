import React, { RefObject, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IModalProps {
  title: string;
  content: React.ReactNode;
  footer: React.ReactNode;
  loading?: boolean;
  modalRef: RefObject<HTMLDialogElement | null>;
  closeModal: () => void;
}

const Modal = ({
  content,
  footer,
  loading,
  modalRef,
  title,
  closeModal,
}: IModalProps) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!loading && modalRef.current === event.target) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal, loading, modalRef]);

  return (
    <>
      {createPortal(
        <dialog
          ref={modalRef}
          className="
            rounded-xs
            md:max-w-120
            w-full
            border-1
            absolute
            left-1/2
            -translate-1/2
            block
            not-open:opacity-0
            not-open:pointer-events-none
            open:opacity-100
            open:top-1/2
            not-open:top-full
            duration-500
            open:backdrop:backdrop-blur-xs
          "
        >
          <div className="px-8 py-12 ">
            <div className="text-center flex flex-col items-center gap-4 mb-8">
              <div className="font-bold text-xl italic">{title}</div>
              <hr className="w-10" />
            </div>
            <div className="mb-8">{content}</div>
            <div>{footer}</div>
          </div>
        </dialog>,
        document.body,
      )}
    </>
  );
};

export default Modal;
