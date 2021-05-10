import { Dispatch, FC, SetStateAction } from 'react';
import './UserForm.styles.css';
import { useFormik } from 'formik';

import {
  IFormData,
  initialFormState,
  formValidationSchema,
  Pages,
} from '../../types';
import { FormField } from '../';

interface IUserFormProps {
  handleSubmit: (formInput: IFormData) => void;
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  setFormPage: Dispatch<SetStateAction<Pages>>;
  setAllowedPages: Dispatch<SetStateAction<Pages[]>>;
  setFormData: Dispatch<SetStateAction<IFormData>>;
}

const UserForm: FC<IUserFormProps> = ({
  handleSubmit,
  isValid,
  setIsValid,
  setFormData,
  setFormPage,
  setAllowedPages,
}) => {
  const formik = useFormik({
    initialValues: initialFormState,
    validationSchema: formValidationSchema,
    onSubmit: handleSubmit,
    validateOnChange: true,
  });

  const handleClick = (formInput: IFormData): void => {
    if (isValid) {
      setFormData(formInput);
      setFormPage('privacyForm');
      setAllowedPages(prev => [...prev, 'privacyForm']);
    }
  };

  return (
    <div className="userform-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="inputs-container">
          <FormField
            label="name"
            formik={formik}
            formValidationSchema={formValidationSchema}
            setIsValid={setIsValid}
            type="text"
            required={true}
          />
          <FormField
            label="role"
            formik={formik}
            formValidationSchema={formValidationSchema}
            setIsValid={setIsValid}
            type="text"
            required={false}
          />
          <FormField
            label="email"
            formik={formik}
            formValidationSchema={formValidationSchema}
            setIsValid={setIsValid}
            type="email"
            required={true}
          />
          <FormField
            label="password"
            formik={formik}
            formValidationSchema={formValidationSchema}
            setIsValid={setIsValid}
            type="password"
            required={true}
          />
        </div>
        <div
          onClick={() => handleClick(formik.values)}
          className={`submit-button ${isValid ? 'enable' : 'disable'}`}>
          Submit
        </div>
      </form>
    </div>
  );
};

export default UserForm;
