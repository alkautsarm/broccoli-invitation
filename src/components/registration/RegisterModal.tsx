import { RefObject, useState } from 'react';
import Button from '../base/Button';
import Modal from '../base/Modal';

interface IRegisterModalProps {
  modalRef: RefObject<HTMLDialogElement | null>;
}

const RegisterModal = ({ modalRef }: IRegisterModalProps) => {
  const [isSuccess] = useState(false);

  const formModalProps = {
    title: 'Request an invite',
    content: <div className="text-center">Form</div>,
    footer: (
      <Button className="w-full" onClick={() => {}}>
        Send
      </Button>
    ),
  };

  const successModalProps = {
    title: 'All done!',
    content: (
      <div className="text-center">
        You will be one of the first to experience Broccoli & Co. when we
        launch.
      </div>
    ),
    footer: (
      <Button className="w-full" onClick={() => {}}>
        OK
      </Button>
    ),
  };

  const modalProps = isSuccess
    ? { modalRef, ...successModalProps }
    : { modalRef, ...formModalProps };

  return <Modal {...modalProps} />;
};

export default RegisterModal;
