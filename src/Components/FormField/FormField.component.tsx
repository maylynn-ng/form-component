import { FC, Dispatch, SetStateAction, ChangeEvent } from 'react';
import './FormField.styles.css';
import { formValidationSchema, IFormData, Pages } from '../../types';

interface IFormFieldProps {
  label: keyof IFormData;
  formik: any;
  formValidationSchema: typeof formValidationSchema;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  type: string;
  required: boolean;
  setAllowedPages: Dispatch<SetStateAction<Pages[]>>;
}

const FormField: FC<IFormFieldProps> = ({
  label,
  formik,
  formValidationSchema,
  setIsValid,
  type,
  required,
  setAllowedPages,
}) => {
  const capitalizedLabel: string = `${label[0].toUpperCase()}${label.slice(
    1,
    label.length
  )}`;

  const handleChangeAndBlur = (
    e: ChangeEvent<HTMLInputElement>,
    handleFunction: Function
  ): void => {
    handleFunction(e);
    formValidationSchema.isValid(formik.values).then((valid: boolean) => {
      setIsValid(valid);
      if (!valid) {
        setAllowedPages(() => ['userForm']);
      }
    });
  };
  return (
    <div className="formfield-container">
      <label data-testid="form-label" htmlFor={label}>
        {capitalizedLabel}
        {required ? <span className="required">*</span> : null}
      </label>
      <input
        data-testid="form-input"
        name={label}
        id={label}
        type={type}
        placeholder={capitalizedLabel}
        onChange={e => handleChangeAndBlur(e, formik.handleChange)}
        onBlur={e => handleChangeAndBlur(e, formik.handleBlur)}
        value={formik.values[label]}
      />
      {required && formik.errors[label] ? (
        <div data-testid="error-message" className="validation-error-message">
          {formik.errors[label]}
        </div>
      ) : null}
    </div>
  );
};

export default FormField;
