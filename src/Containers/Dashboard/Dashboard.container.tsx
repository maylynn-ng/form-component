import React, { FC, useState } from 'react';
import './Dashboard.styles.css';

import { UserForm, PrivacyForm, DoneForm } from '../../Components';

const Dashboard: FC = () => {
  const [isValid, setIsValid] = useState(false);
  const [formPage, setFormPage] = useState('userForm');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('handleSubmit', e.target);
  };

  const handleChange = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log('on change', e.target);
  };

  return (
    <div>
      <div className="form-container">
        {formPage === 'userForm' ? (
          <UserForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            isValid={isValid}
          />
        ) : null}
        {formPage === 'privacyForm' ? (
          <PrivacyForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            isValid={isValid}
          />
        ) : null}
        {formPage === 'doneForm' ? <DoneForm isValid={isValid} /> : null}
      </div>
    </div>
  );
};

export default Dashboard;
