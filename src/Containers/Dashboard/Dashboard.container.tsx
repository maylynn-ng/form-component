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
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [allowedPages, setAllowedPages] = useState<Pages[]>(['userForm']);
  const [formData, setFormData] = useState<IFormData>(initialFormState);

  const pagesArray: Pages[] = ['userForm', 'privacyForm', 'doneForm'];

  const handleSubmit = (formInput: IFormData): void => {
    setFormData(formInput);
    setPageIndex(prevIndex => prevIndex + 1);
  };

  useEffect(() => {
    setAllowedPages(prevPages => [...prevPages, pagesArray[pageIndex]]);
    setFormPage(pagesArray[pageIndex]);
  }, [pageIndex]);

  return (
    <div className="dashboard-container">
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
              setPageIndex={setPageIndex}
            />
          </div>
          <div
            style={{
              display: `${formPage === 'privacyForm' ? 'flex' : 'none'}`,
            }}>
            <PrivacyForm
              formData={formData}
              setFormData={setFormData}
              setFormPage={setFormPage}
            />
          </div>
          <div
            style={{
              display: `${formPage === 'doneForm' ? 'flex' : 'none'}`,
            }}>
            <DoneForm formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
