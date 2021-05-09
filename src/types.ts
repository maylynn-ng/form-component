import * as yup from 'yup';

export type Pages = 'userForm' | 'privacyForm' | 'doneForm';

export interface IFormData {
  name: string;
  role: string;
  email: string;
  password: string;
  updates: boolean;
  communication: boolean;
}

export const initialFormState = {
  name: '',
  role: '',
  email: '',
  password: '',
  updates: false,
  communication: false,
};

export const formValidationSchema = yup.object().shape({
  name: yup.string().required("Don't forget your name!"),
  role: yup.string(),
  email: yup
    .string()
    .email("Hmm... this email doesn't seem right")
    .required('Please provide an email'),
  password: yup
    .string()
    .required()
    .matches(/.{9,}/g, 'must be at least 10 characters')
    .matches(/[a-z]/g, 'must include at least one lowercase letter')
    .matches(/[A-Z]/g, 'must include at least one uppercase letter')
    .matches(/\d/g, 'must have at least one number'),
  updates: yup.boolean().default(false),
  communication: yup.boolean().default(false),
});
