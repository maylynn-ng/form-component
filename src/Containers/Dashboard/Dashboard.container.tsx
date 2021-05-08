import React, { FC, useState } from 'react';
import './Dashboard.styles.css';

import { UserForm, PrivacyForm, DoneForm } from '../../Components';

const Dashboard: FC = () => {
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('handleSubmit', e.target);
  };

  const handleChange = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log('on change', e.target);
  };

  return (
    <div>
      <UserForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isValid={isValid}
      />
      <PrivacyForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isValid={isValid}
      />
      <DoneForm isValid={isValid} />
    </div>
  );
};

export default Dashboard;
