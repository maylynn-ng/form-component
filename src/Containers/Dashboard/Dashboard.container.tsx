import { FC, useEffect, useState } from 'react';
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

  const pagesArray: Pages[] = ['userForm', 'privacyForm', 'doneForm'];

  const handleSubmit = (formInput: IFormData): void => {
    setFormData(formInput);
  };

  return (
    <div className="dashboard-container">
      <div className="signup-text">Sign up to stay tuned!</div>
      <div className="form-container">
        <FormSelector
          setFormPage={setFormPage}
          formPage={formPage}
          allowedPages={allowedPages}
          pagesArray={pagesArray}
        />
        <div className="form">
          <div
            style={{
              display: `${formPage === 'userForm' ? 'flex' : 'none'}`,
            }}>
            <UserForm
              handleSubmit={handleSubmit}
              isValid={isValid}
              setIsValid={setIsValid}
              setFormData={setFormData}
              setAllowedPages={setAllowedPages}
              setFormPage={setFormPage}
            />
          </div>
          <div
            style={{
              display: `${formPage === 'privacyForm' ? 'flex' : 'none'}`,
            }}>
            <PrivacyForm
              setFormData={setFormData}
              setFormPage={setFormPage}
              setAllowedPages={setAllowedPages}
            />
          </div>
          <div
            style={{
              display: `${formPage === 'doneForm' ? 'flex' : 'none'}`,
            }}>
            <DoneForm formData={formData} formPage={formPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
