import { Dispatch, FC, FormEvent, SetStateAction, useEffect } from 'react';
import './PrivacyForm.styles.css';

import { IFormData, Pages } from '../../types';

interface IPrivacyFormProps {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  setFormPage: Dispatch<SetStateAction<Pages>>;
}

const PrivacyForm: FC<IPrivacyFormProps> = ({
  formData,
  setFormData,
  setFormPage,
}) => {
  const handleChange = (
    e: FormEvent<HTMLInputElement>,
    name: keyof IFormData
  ): void => {
    setFormData(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="privacyform-container">
      <div className="checkbox">
        <input
          type="checkbox"
          name="updates"
          checked={formData.updates}
          onChange={e => handleChange(e, 'updates')}
        />
        <div className="checkbox-text">
          Receive updates about Tray.io product by email
        </div>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          name="communication"
          checked={formData.communication}
          onChange={e => handleChange(e, 'communication')}
        />
        <div className="checkbox-text">
          Receive communication by email for other products created by the
          Tray.io team
        </div>
      </div>
      <div onClick={() => setFormPage('doneForm')} className="submit-button">
        Submit
      </div>
    </div>
  );
};

export default PrivacyForm;
