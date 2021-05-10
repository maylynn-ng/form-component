import { Dispatch, FC, FormEvent, SetStateAction } from 'react';
import './PrivacyForm.styles.css';

import { IFormData, Pages } from '../../types';

interface IPrivacyFormProps {
  setFormData: Dispatch<SetStateAction<IFormData>>;
  setFormPage: Dispatch<SetStateAction<Pages>>;
  setAllowedPages: Dispatch<SetStateAction<Pages[]>>;
}

const PrivacyForm: FC<IPrivacyFormProps> = ({
  setFormData,
  setFormPage,
  setAllowedPages,
}) => {
  const handleChange = (
    e: FormEvent<HTMLInputElement>,
    name: keyof IFormData
  ): void => {
    setFormData(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleClick = (): void => {
    setFormPage('doneForm');
    setAllowedPages(prev => [...prev, 'doneForm']);
  };

  return (
    <div className="privacyform-container">
      <div className="checkbox">
        <input
          data-testid="checkbox"
          type="checkbox"
          name="updates"
          onChange={e => handleChange(e, 'updates')}
        />
        <div className="checkbox-text">
          Receive updates about Tray.io product by email
        </div>
      </div>
      <div className="checkbox">
        <input
          data-testid="checkbox"
          type="checkbox"
          name="communication"
          onChange={e => handleChange(e, 'communication')}
        />
        <div className="checkbox-text">
          Receive communication by email for other products created by the
          Tray.io team
        </div>
      </div>
      <div onClick={handleClick} className="submit-button">
        Submit
      </div>
    </div>
  );
};

export default PrivacyForm;
