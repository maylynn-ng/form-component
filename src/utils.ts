import { IErrors } from './types';

export const validateInputs = (name: string, value: string): string => {
  if (name === 'name') return validateName(value);
  if (name === 'email') return validateEmail(value);
  if (name === 'password') return validatePassword(value);
  return '';
};

const validateName = (input: string): string => {
  if (input === '') return "Don't forget your name!";
  return '';
};

const validateEmail = (input: string): string => {
  if (input === '') return 'Please provide an email';
  if (!input.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))
    return "Hmmmm... this email doesn't seem right";
  return '';
};

const validatePassword = (input: string): string => {
  if (input === '') return 'Please provide a password';
  if (!input.match(/.{9,}/g)) return 'Must be at least 10 characters';
  if (!input.match(/[a-z]+/g))
    return 'Must include at least one lowercase letter';
  if (!input.match(/[A-Z]+/g))
    return 'Must include at least one uppercase letter';
  if (!input.match(/\d+/g)) return 'Must have at least one number';
  return '';
};

export const validateForSubmit = (errors: IErrors) => {
  return Object.values(errors).every(error => error.length === 0);
};
