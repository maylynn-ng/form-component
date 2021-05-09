import { Dispatch, FC, SetStateAction } from 'react';
import './FormSelector.styles.css';
import { Pages } from '../../types';

interface IFormSelectorProps {
  setFormPage: Dispatch<SetStateAction<Pages>>;
  formPage: Pages;
  allowedPages: Pages[];
  pagesArray: Pages[];
}

const FormSelector: FC<IFormSelectorProps> = ({
  setFormPage,
  formPage,
  allowedPages,
  pagesArray,
}) => {
  const handleClick = (
    allowedPages: Pages[],
    page: Pages,
    setFormPage: Dispatch<SetStateAction<Pages>>
  ): void => {
    if (allowedPages.includes(page)) {
      setFormPage(page);
    }
  };

  return (
    <div className="formpage-selector">
      {pagesArray.map(page => (
        <div
          onClick={() => handleClick(allowedPages, page, setFormPage)}
          className={`tab ${formPage === page ? 'selected' : ''}
          ${!allowedPages.includes(page) ? 'disable' : ''}
          `}>{`${page[0].toUpperCase()}${page.slice(1, -4)}`}</div>
      ))}
    </div>
  );
};

export default FormSelector;
