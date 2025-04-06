import { RegisterOptions } from 'react-hook-form';
import { IRegisterForm } from '../interfaces/register';

export const NameField: RegisterOptions<IRegisterForm, 'name'> = {
  required: 'Name is required',
  minLength: {
    message: 'Name should be at least 3 characters',
    value: 3,
  },
};

export const EmailField: RegisterOptions<IRegisterForm, 'email'> = {
  required: 'Email is required',
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: 'Entered value does not match email format',
  },
};

export const ConfirmEmailField: RegisterOptions<
  IRegisterForm,
  'emailConfirmation'
> = {
  required: 'Confirm email is required',
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: 'Entered value does not match email format',
  },
  validate: (value, form) => {
    return (
      value === form['email'] ||
      'Cofnirm email should have the same value with email'
    );
  },
};
