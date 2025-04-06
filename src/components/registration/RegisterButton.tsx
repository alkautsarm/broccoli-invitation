import { useRef } from 'react';
import Button from '../base/Button';
import RegisterModal from './RegisterModal';

const RegisterButton = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <Button onClick={() => modalRef.current?.showModal()}>
        Request an invite
      </Button>
      <RegisterModal modalRef={modalRef} />
    </>
  );
};

export default RegisterButton;
