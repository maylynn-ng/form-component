import { FC, FormEvent, FormEventHandler, useEffect, useState } from 'react';
import './Dashboard.styles.css';
import {
  IFormData,
  initialFormState,
  Pages,
  IErrors,
  initialErrors,
  ICommsOptions,
  initialCommsOptions,
} from '../../types';

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
  const [errors, setErrors] = useState<IErrors>(initialErrors);
  const [commsOptions, setCommsOptions] = useState<ICommsOptions>(
    initialCommsOptions
  );
  const pagesArray: Pages[] = ['userForm', 'privacyForm', 'doneForm'];

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
          {formPage === 'userForm' ? (
            <UserForm
              isValid={isValid}
              setIsValid={setIsValid}
              setFormData={setFormData}
              setAllowedPages={setAllowedPages}
              setFormPage={setFormPage}
              formData={formData}
              errors={errors}
              setErrors={setErrors}
            />
          ) : null}
          {formPage === 'privacyForm' ? (
            <PrivacyForm
              setFormPage={setFormPage}
              setAllowedPages={setAllowedPages}
              setCommsOptions={setCommsOptions}
              setFormData={setFormData}
            />
          ) : null}
          {formPage === 'doneForm' ? (
            <DoneForm
              formData={formData}
              formPage={formPage}
              commsOptions={commsOptions}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
