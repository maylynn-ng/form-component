import { FC, useState } from 'react';
import './Dashboard.styles.css';
import { IFormData, initialFormState, Pages } from '../../types';

import {
  UserForm,
  PrivacyForm,
  DoneForm,
  FormSelector,
} from '../../Components';

const Dashboard: FC = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formPage, setFormPage] = useState<Pages>('userForm');
  const [allowedPages, setAllowedPages] = useState<Pages[]>(['userForm']);
  const [formData, setFormData] = useState<IFormData>(initialFormState);

  // const pagesArray: Pages[] = ['userForm', 'privacyForm', 'doneForm'];

  const handleSubmit = (formInput: IFormData): void => {
    console.log(formInput);
    setFormData(formInput);
    setFormPage('privacyForm');
    setAllowedPages(prev => [...prev, 'privacyForm']);
  };

  return (
    <div className="dashboard-container">
      <div className="form-container">
        <FormSelector
          setFormPage={setFormPage}
          formPage={formPage}
          allowedPages={allowedPages}
        />
        <div className="form">
          {formPage === 'userForm' ? (
            <UserForm
              handleSubmit={handleSubmit}
              isValid={isValid}
              setIsValid={setIsValid}
            />
          ) : null}
          {formPage === 'privacyForm' ? (
            <PrivacyForm
              handleSubmit={handleSubmit}
              isValid={isValid}
              formData={formData}
            />
          ) : null}
          {formPage === 'doneForm' ? (
            <DoneForm isValid={isValid} formData={formData} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
