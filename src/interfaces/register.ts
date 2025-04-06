export interface IRegisterForm {
  name: string;
  email: string;
  emailConfirmation: string;
}

export type IRegisterPayload = Omit<IRegisterForm, 'emailConfirmation'>;
