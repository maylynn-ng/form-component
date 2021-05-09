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
}

const UserForm: FC<IUserFormProps> = ({
  handleSubmit,
  isValid,
  setIsValid,
}) => {
  const formik = useFormik({
    initialValues: initialFormState,
    validationSchema: formValidationSchema,
    onSubmit: handleSubmit,
    validateOnChange: true,
  });

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
        <Button isValid={isValid} buttonText="Submit" directTo="privacyForm" />
      </form>
    </div>
  );
};

export default UserForm;
