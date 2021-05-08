import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import './Dashboard.styles.css';

import { UserForm, PrivacyForm, DoneForm } from '../../Components';

interface IFormData {
  name: string;
  role: string;
  email: string;
  password: string;
}

const Dashboard: FC = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formPage, setFormPage] = useState<string>('userForm');
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    role: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('handleSubmit', e.target);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value.trim() }));
    console.log(validateInput(name, value));
  };

  const validateInput = (name: string, input: string): string[] => {
    if (name === 'name') {
      if (input.length === 0) return ['Please provide your name'];
    }
    if (name === 'email') {
      if (input.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        return ["Hmm... this email doesn't email doesn't seem right"];
      }
    }
    if (name === 'password') {
      const passwordErrors: string[] = [];
      if (input.length <= 9) {
        passwordErrors.push('Password must be at least 10 characters');
      }
      if (input.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/g)) {
        passwordErrors.push(
          'Password must contain at least one uppercase and one lowercase character'
        );
      }
      if (input.match(/(?=.*\d)/g)) {
        passwordErrors.push('Password must contain at least one number');
      }
      return passwordErrors;
    }
    return [];
  };

  return (
    <div className="dashboard-container">
      <div className="form-container">
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
        {formPage === 'userForm' ? (
          <UserForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            isValid={isValid}
            formData={formData}
          />
        ) : null}
        {formPage === 'privacyForm' ? (
          <PrivacyForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            isValid={isValid}
            formData={formData}
          />
        ) : null}
        {formPage === 'doneForm' ? (
          <DoneForm isValid={isValid} formData={formData} />
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
