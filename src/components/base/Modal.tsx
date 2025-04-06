import React, { Ref } from 'react';
import { createPortal } from 'react-dom';

interface IModalProps {
  title: string;
  content: React.ReactNode;
  footer: React.ReactNode;
  modalRef: Ref<HTMLDialogElement | null>;
}

const Modal = ({ content, footer, modalRef, title }: IModalProps) => {
  return (
    <>
      {createPortal(
        <dialog
          ref={modalRef}
          className="w-3/4 px-8 py-12 border-1 absolute top-1/2 left-1/2 -translate-1/2"
        >
          <div className="text-center flex flex-col items-center gap-4 mb-8">
            <div className="font-bold text-xl italic">{title}</div>
            <hr className="w-10" />
          </div>
          <div className="mb-8">{content}</div>
          <div>{footer}</div>
        </dialog>,
        document.body,
      )}
    </>
  );
};

export default Modal;
