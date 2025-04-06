import { RefObject, useState } from 'react';
import Button from '../base/Button';
import Modal from '../base/Modal';
import TextInput from '../base/TextInput';

interface IRegisterModalProps {
  modalRef: RefObject<HTMLDialogElement | null>;
}

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <TextInput placeholder="Full name" />
      <TextInput placeholder="Email" type="email" />
      <TextInput placeholder="Confirm email" type="email" />
    </form>
  );
};

const RegisterModal = ({ modalRef }: IRegisterModalProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const submitData = () => {
    setIsSuccess(true);
  };

  const closeModal = () => {
    setIsSuccess(false);
    modalRef.current?.close();
  };

  const formModalProps = {
    title: 'Request an invite',
    content: <RegisterForm />,
    footer: (
      <Button className="w-full" onClick={submitData}>
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
      <Button className="w-full" onClick={closeModal}>
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
