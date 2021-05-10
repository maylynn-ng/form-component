export type Pages = 'userForm' | 'privacyForm' | 'doneForm';

export interface IFormData {
  name: string;
  role: string;
  email: string;
  password: string;
}

export interface ICommsOptions {
  updates: boolean;
  communication: boolean;
  [key: string]: boolean;
}

export const initialCommsOptions = {
  updates: false,
  communication: false,
};

export const initialFormState = {
  name: '',
  role: '',
  email: '',
  password: '',
  updates: false,
  communication: false,
};

export interface IErrors {
  name: string;
  role: string;
  email: string;
  password: string;
}

export const initialErrors = {
  name: "Don't forget your name!",
  role: '',
  email: 'Please provide an email',
  password: 'Please provide a password',
};
