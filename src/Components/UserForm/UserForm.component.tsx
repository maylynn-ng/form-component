import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
} from 'react';
import './UserForm.styles.css';

import { IFormData, Pages, IErrors } from '../../types';
import { FormField } from '../';
import { validateInputs, validateForSubmit } from '../../utils';

interface IUserFormProps {
  isValid: boolean;
  formData: IFormData;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  setFormPage: Dispatch<SetStateAction<Pages>>;
  setAllowedPages: Dispatch<SetStateAction<Pages[]>>;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  errors: IErrors;
  setErrors: Dispatch<SetStateAction<IErrors>>;
}

const UserForm: FC<IUserFormProps> = ({
  isValid,
  setIsValid,
  setFormData,
  setFormPage,
  setAllowedPages,
  formData,
  errors,
  setErrors,
}) => {
  // useEffect listening to formData to handle asynchromicity of setErrors in handleChange
  useEffect(() => {
    setIsValid(validateForSubmit(errors));
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({
      ...prev,
      [name]: validateInputs(name, value),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      setFormPage('privacyForm'); // progresses to next page
      setAllowedPages(prev => [...prev, 'privacyForm']);
    }
  };

  return (
    <div className="userform-container">
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          <FormField
            label="name"
            formData={formData}
            type="text"
            isRequired={true}
            handleChange={handleChange}
            errors={errors}
          />
          <FormField
            label="role"
            formData={formData}
            type="text"
            isRequired={false}
            handleChange={handleChange}
            errors={errors}
          />
          <FormField
            label="email"
            formData={formData}
            type="email"
            isRequired={true}
            handleChange={handleChange}
            errors={errors}
          />
          <FormField
            label="password"
            formData={formData}
            type="password"
            isRequired={true}
            handleChange={handleChange}
            errors={errors}
          />
        </div>
        <button
          type="submit"
          className={`submit-button ${isValid ? 'enable' : 'disable'}`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
