import { RefObject, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import Button from '../base/Button';
import Modal from '../base/Modal';
import TextInput from '../base/TextInput';
import useFetch from '../../hooks/useFetch';
import { API_REGISTER_INVITATION } from '../../constants/api';
import { IRegisterForm } from '../../interfaces/register';
import {
  ConfirmEmailField,
  EmailField,
  NameField,
} from '../../constants/formSchema';

interface IRegisterFormProps {
  formHook: UseFormReturn<IRegisterForm>;
}

interface IRegisterModalProps {
  modalRef: RefObject<HTMLDialogElement | null>;
}

const RegisterForm = ({ formHook }: IRegisterFormProps) => {
  return (
    <form className="flex flex-col gap-4">
      <TextInput
        inputRegister={formHook.register('name', NameField)}
        errorMessage={formHook.formState.errors['name']?.message}
        placeholder="Full name"
      />
      <TextInput
        inputRegister={formHook.register('email', EmailField)}
        errorMessage={formHook.formState.errors['email']?.message}
        placeholder="Email"
        type="email"
      />
      <TextInput
        inputRegister={formHook.register(
          'emailConfirmation',
          ConfirmEmailField,
        )}
        errorMessage={formHook.formState.errors['emailConfirmation']?.message}
        placeholder="Confirm email"
        type="email"
      />
    </form>
  );
};

const RegisterModal = ({ modalRef }: IRegisterModalProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const formHook = useForm<IRegisterForm>();
  const { fetchData } = useFetch({
    url: API_REGISTER_INVITATION,
    method: 'POST',
  });

  const onSubmit = async (data: IRegisterForm) => {
    await fetchData({
      name: data.name,
      email: data.email,
    });
    formHook.reset();
    setIsSuccess(true);
  };

  const closeModal = () => {
    setIsSuccess(false);
    modalRef.current?.close();
  };

  const formModalProps = {
    title: 'Request an invite',
    content: <RegisterForm formHook={formHook} />,
    footer: (
      <Button className="w-full" onClick={formHook.handleSubmit(onSubmit)}>
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
