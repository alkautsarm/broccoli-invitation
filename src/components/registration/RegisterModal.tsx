import { RefObject, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import Button from '../base/Button';
import Modal from '../base/Modal';
import TextInput from '../base/TextInput';
import useFetch from '../../hooks/useFetch';
import { API_REGISTER_INVITATION } from '../../constants/api';
import { IRegisterForm, IRegisterPayload } from '../../interfaces/register';
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
  const { error, isLoading, fetchData } = useFetch<IRegisterPayload, unknown>({
    url: API_REGISTER_INVITATION,
    method: 'POST',
    onSuccess: () => setIsSuccess(true),
  });

  const onSubmit = async (data: IRegisterForm) => {
    await fetchData({
      name: data.name,
      email: data.email,
    });
  };

  const closeModal = () => {
    formHook.reset();
    setIsSuccess(false);
    modalRef.current?.close();
  };

  const formModalProps = {
    title: 'Request an invite',
    content: <RegisterForm formHook={formHook} />,
    footer: (
      <div className="relative">
        <Button
          className="w-full"
          loading={isLoading}
          onClick={formHook.handleSubmit(onSubmit)}
        >
          {isLoading ? 'Sending, please wait...' : 'Send'}
        </Button>
        {error && (
          <div className="text-center mt-8 text-sm text-red-700">
            {error.message}
          </div>
        )}
      </div>
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
    ? { modalRef, loading: isLoading, closeModal, ...successModalProps }
    : { modalRef, loading: isLoading, closeModal, ...formModalProps };

  return <Modal {...modalProps} />;
};

export default RegisterModal;
