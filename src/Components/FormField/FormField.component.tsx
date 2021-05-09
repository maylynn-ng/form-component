import { FC, Dispatch, SetStateAction } from 'react';
import './FormField.styles.css';
import { formValidationSchema } from '../../types';

interface IFormFieldProps {
  label: string;
  formik: any;
  formValidationSchema: typeof formValidationSchema;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  type: string;
  required: boolean;
}

const FormField: FC<IFormFieldProps> = ({
  label,
  formik,
  formValidationSchema,
  setIsValid,
  type,
  required,
}) => {
  const capitalizedLabel = `${label[0].toUpperCase()}${label.slice(
    1,
    label.length
  )}`;
  return (
    <div className="formfield-container">
      <label htmlFor={label}>
        {capitalizedLabel}
        {required ? <span className="required">*</span> : null}
      </label>
      <input
        name={label}
        id={label}
        type={type}
        placeholder={capitalizedLabel}
        onChange={e => {
          formik.handleChange(e);
          formValidationSchema.isValid(formik.values).then((valid: boolean) => {
            setIsValid(valid);
          });
        }}
        onBlur={e => {
          formik.handleBlur(e);
          formValidationSchema.isValid(formik.values).then((valid: boolean) => {
            setIsValid(valid);
          });
        }}
        value={formik.values[label]}
      />
      {required && formik.touched[label] && formik.errors[label] ? (
        <div className="validation-error-message">{formik.errors[label]}</div>
      ) : null}
    </div>
  );
};

export default FormField;
