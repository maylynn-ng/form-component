import { Dispatch, FC, SetStateAction } from 'react';
import './UserForm.styles.css';
import { useFormik } from 'formik';

import { IFormData, initialFormState, formValidationSchema } from '../../types';
import { Button } from '../../Elements';
import { FormField } from '../';

interface IUserFormProps {
  handleSubmit: (formInput: IFormData) => void;
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  setPageIndex: Dispatch<SetStateAction<number>>;
}

const UserForm: FC<IUserFormProps> = ({
  handleSubmit,
  isValid,
  setIsValid,
  setFormData,
  setPageIndex,
}) => {
  const formik = useFormik({
    initialValues: initialFormState,
    validationSchema: formValidationSchema,
    onSubmit: handleSubmit,
    validateOnChange: true,
  });

  const handleClick = (formInput: IFormData): void => {
    console.log(formInput);
    if (isValid) {
      setFormData(formInput);
      setPageIndex(prevIndex => prevIndex + 1);
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
