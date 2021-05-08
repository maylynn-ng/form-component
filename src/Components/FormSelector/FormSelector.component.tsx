import { Dispatch, FC, SetStateAction } from 'react';
import './FormSelector.styles.css';

interface IFormSelectorProps {
  setFormPage: Dispatch<SetStateAction<string>>;
  formPage: string;
}

const FormSelector: FC<IFormSelectorProps> = ({ setFormPage, formPage }) => {
  return (
    <div className="formpage-selector">
      <div
        onClick={() => setFormPage('userForm')}
        className={`tab ${formPage === 'userForm' ? 'selected' : ''}`}>
        User
      </div>
      <div
        onClick={() => setFormPage('privacyForm')}
        className={`tab ${formPage === 'privacyForm' ? 'selected' : ''}`}>
        Privacy
      </div>
      <div
        onClick={() => setFormPage('doneForm')}
        className={`tab ${formPage === 'doneForm' ? 'selected' : ''}`}>
        Done
      </div>
    </div>
  );
};

export default FormSelector;
