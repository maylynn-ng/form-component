import { FC, ChangeEventHandler } from 'react';
import './FormField.styles.css';
import { IFormData, IErrors } from '../../types';

interface IFormFieldProps {
  label: keyof IFormData;
  formData: IFormData;
  type: string;
  isRequired: boolean;
  errors: IErrors;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const FormField: FC<IFormFieldProps> = ({
  label,
  type,
  isRequired,
  formData,
  errors,
  handleChange,
}) => {
  const capitalizedLabel: string = `${label[0].toUpperCase()}${label.slice(
    1,
    label.length
  )}`;

  return (
    <div className="formfield-container">
      <label data-testid="form-label" htmlFor={label}>
        {capitalizedLabel}
        {isRequired ? <span className="required">*</span> : null}
      </label>
      <input
        data-testid="form-input"
        name={label}
        id={label}
        type={type}
        placeholder={capitalizedLabel}
        onChange={handleChange}
        value={formData[label]}
      />
      {isRequired && errors[label] ? (
        <div data-testid="error-message" className="validation-error-message">
          {errors[label]}
        </div>
      ) : null}
    </div>
  );
};

export default FormField;
