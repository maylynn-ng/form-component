import { Dispatch, FC, FormEvent, SetStateAction } from 'react';
import './PrivacyForm.styles.css';

import { ICommsOptions, IFormData, Pages, initialFormState } from '../../types';

interface IPrivacyFormProps {
  setFormPage: Dispatch<SetStateAction<Pages>>;
  setAllowedPages: Dispatch<SetStateAction<Pages[]>>;
  setCommsOptions: Dispatch<SetStateAction<ICommsOptions>>;
  setFormData: Dispatch<SetStateAction<IFormData>>;
}

const PrivacyForm: FC<IPrivacyFormProps> = ({
  setFormPage,
  setAllowedPages,
  setCommsOptions,
  setFormData,
}) => {
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget;
    setCommsOptions(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleClick = (): void => {
    setFormPage('doneForm'); // progresses to next page
    setAllowedPages(prev => ['doneForm']); // disables other pages once form is submitted
    setFormData(initialFormState);
  };

  return (
    <div className="privacyform-container">
      <div className="checkbox">
        <input
          data-testid="checkbox"
          type="checkbox"
          name="updates"
          onChange={handleChange}
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
          onChange={handleChange}
        />
        <div className="checkbox-text">
          Receive communication by email for other products created by the
          Tray.io team
        </div>
      </div>
      <button onClick={handleClick} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default PrivacyForm;
