import { FC, useEffect } from 'react';
import './DoneForm.styles.css';

import { IFormData } from '../../types';

interface IDoneFormProps {
  isValid: boolean;
  formData: IFormData;
}

const DoneForm: FC<IDoneFormProps> = ({ isValid, formData }) => {
  useEffect(() => {
    console.log(JSON.stringify(formData));
  }, []);

  return (
    <div className="doneform-container">
      'Please verify your email address, you should have received an email from
      us already!'
    </div>
  );
};

export default DoneForm;
