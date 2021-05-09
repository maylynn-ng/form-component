import { Dispatch, FC, SetStateAction } from 'react';
import './FormSelector.styles.css';
import { Pages } from '../../types';

interface IFormSelectorProps {
  setFormPage: Dispatch<SetStateAction<Pages>>;
  formPage: Pages;
  allowedPages: Pages[];
}

const FormSelector: FC<IFormSelectorProps> = ({
  setFormPage,
  formPage,
  allowedPages,
}) => {
  const pagesArray: Pages[] = ['userForm', 'privacyForm', 'doneForm'];

  return (
    <div className="formpage-selector">
      {pagesArray.map(page => (
        <div
          onClick={() => setFormPage(page)}
          className={`tab ${
            formPage === page ? 'selected' : ''
          }`}>{`${page[0].toUpperCase()}${page.slice(1, -4)}`}</div>
      ))}
    </div>
  );
};

export default FormSelector;
