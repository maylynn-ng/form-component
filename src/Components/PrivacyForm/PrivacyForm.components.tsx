import { FC } from 'react';
import './PrivacyForm.styles.css';

import { Button } from '../../Elements';
import { IFormData } from '../../types';

interface IPrivacyFormProps {
  handleSubmit: (formInput: IFormData) => void;
  isValid: boolean;
  formData: IFormData;
}

const PrivacyForm: FC<IPrivacyFormProps> = ({
  handleSubmit,
  isValid,
  formData,
}) => {
  return (
    <div className="privacyform-container">
      {/* <form onSubmit={handleSubmit}> */}
      <div className="checkbox">
        <input type="checkbox" name="updates" />
        <div className="checkbox-text">
          Receive updates about Tray.io product by email
        </div>
      </div>
      <div className="checkbox">
        <input type="checkbox" name="communication" />
        <div className="checkbox-text">
          Receive communication by email for other products created by the
          Tray.io team
        </div>
      </div>
      <Button isValid={isValid} buttonText="Submit" directTo="doneForm" />
      {/* </form> */}
    </div>
  );
};

export default PrivacyForm;
