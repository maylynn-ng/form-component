import { FC, useEffect } from 'react';
import './DoneForm.styles.css';
import tickbox from '../../Assets/tickbox.png';

import { ICommsOptions, IFormData, Pages } from '../../types';

interface IDoneFormProps {
  formData: IFormData;
  formPage: Pages;
  commsOptions: ICommsOptions;
}

const DoneForm: FC<IDoneFormProps> = ({ formData, formPage, commsOptions }) => {
  useEffect(() => {
    if (formPage === 'doneForm')
      console.log(JSON.stringify({ ...formData, ...commsOptions }));
  }, [formPage]);

  return (
    <div className="doneform-container">
      <img className="tickbox" src={tickbox} alt="Tick box" />
      Please verify your email address, you should have received an email from
      us already!
    </div>
  );
};

export default DoneForm;
